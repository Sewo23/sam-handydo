import sharp from 'sharp';

const input = process.argv[2];
const output = process.argv[3] ?? 'public/logo.png';

if (!input) {
	console.error('Usage: node remove-logo-bg.mjs <input> [output]');
	process.exit(1);
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const out = Buffer.from(data);
const total = width * height;

const isOuterBg = (r, g, b) => {
	if (r > 235 && g > 235 && b > 235) return true;
	if (Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && r >= 165 && r <= 225) return true;
	if (r < 50 && g < 50 && b < 50) return true;
	return false;
};

/** Dark fill inside house cutout — not gold */
const isHouseFill = (r, g, b) => {
	if (r < 15 && g < 15 && b < 15) return true;
	if (r < 90 && g < 72 && b < 58 && r - b < 40) return true;
	return false;
};

const outerVisited = new Uint8Array(total);
const innerVisited = new Uint8Array(total);

function flood(queue, isMatch, visited) {
	while (queue.length) {
		const i = queue.pop();
		const o = i * channels;
		out[o + 3] = 0;

		const ix = i % width;
		const iy = (i / width) | 0;

		for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
			const jx = ix + dx;
			const jy = iy + dy;
			if (jx < 0 || jx >= width || jy < 0 || jy >= height) continue;
			const j = jy * width + jx;
			if (visited[j]) continue;

			const jo = j * channels;
			if (isMatch(data[jo], data[jo + 1], data[jo + 2])) {
				visited[j] = 1;
				queue.push(j);
			}
		}
	}
}

// 1) Remove outer background from edges
const outerQueue = [];
for (let x = 0; x < width; x++) {
	for (const y of [0, height - 1]) {
		const i = y * width + x;
		const o = i * channels;
		if (isOuterBg(data[o], data[o + 1], data[o + 2])) {
			outerVisited[i] = 1;
			outerQueue.push(i);
		}
	}
}
for (let y = 0; y < height; y++) {
	for (const x of [0, width - 1]) {
		const i = y * width + x;
		if (outerVisited[i]) continue;
		const o = i * channels;
		if (isOuterBg(data[o], data[o + 1], data[o + 2])) {
			outerVisited[i] = 1;
			outerQueue.push(i);
		}
	}
}
flood(outerQueue, isOuterBg, outerVisited);

// 2) Remove enclosed house interior — flood from centre seeds
const innerQueue = [];
const seeds = [
	[width >> 1, height >> 1],
	[width >> 1, (height >> 1) + 30],
	[(width >> 1) - 20, height >> 1],
	[(width >> 1) + 20, height >> 1],
];
for (const [sx, sy] of seeds) {
	const i = sy * width + sx;
	const o = i * channels;
	if (out[o + 3] > 0 && isHouseFill(data[o], data[o + 1], data[o + 2])) {
		innerVisited[i] = 1;
		innerQueue.push(i);
	}
}
flood(innerQueue, isHouseFill, innerVisited);

// 3) Remove any leftover pure-black islands (gaps in canopy etc.)
const isPureBlack = (r, g, b) => r < 25 && g < 25 && b < 25;
const blackVisited = new Uint8Array(total);
const blackQueue = [];
for (let i = 0; i < total; i++) {
	const o = i * channels;
	if (out[o + 3] > 0 && isPureBlack(data[o], data[o + 1], data[o + 2])) {
		blackVisited[i] = 1;
		blackQueue.push(i);
	}
}
flood(blackQueue, isPureBlack, blackVisited);

await sharp(out, { raw: { width, height, channels: 4 } })
	.png({ compressionLevel: 9 })
	.toFile(output);

let transparent = 0;
for (let i = 0; i < total; i++) {
	if (out[i * channels + 3] < 20) transparent++;
}
console.log(`Saved ${output} — ${transparent}/${total} transparent pixels`);
