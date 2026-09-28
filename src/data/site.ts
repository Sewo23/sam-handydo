export const SITE = {
	name: 'SAM HANDY DO',
	shortName: 'Sam Handy Do',
	url: 'https://samhandydo.ie',
	title: 'SAM HANDY DO | Premium Home & Garden Craftsman in Ireland',
	description:
		'One skilled craftsman for your entire property — home repairs, garden care, outdoor living, and finishing touches. Premium workmanship across Dublin and surrounding counties.',
	ogDescription:
		'Inside the house, outside in the garden — SAM HANDY DO brings golden-hands craftsmanship to every corner of your home.',
	phone: '+353857168645',
	phoneDisplay: '085 716 8645',
	email: 'samhandydo@gmail.com',
	whatsapp: '353857168645',
	whatsappDefaultMessage: "Hi, I'd like to discuss a home or garden project.",
	areasServed: ['Dublin', 'Kildare', 'Meath', 'Wicklow'],
} as const;

export const pillars = [
	{
		title: 'Your Home',
		subtitle: 'Kitchen Fit-Out',
		description: 'Cabinet doors, hinges, and fittings — kitchen work handled cleanly so the heart of the home feels finished again.',
		icon: 'home',
		video: '',
		image: '',
		poster: '',
	},
	{
		title: 'Your Garden',
		subtitle: 'Garden Care',
		description: 'Paths, beds, and outdoor tidy-ups — keeping the garden neat so the whole property feels cared for.',
		icon: 'garden',
		video: '',
		image: '',
		poster: '',
	},
	{
		title: 'Painting & Finish',
		subtitle: 'Clean Lines',
		description: 'Walls, woodwork, and touch-ups with proper prep — a finish that looks considered, not rushed.',
		icon: 'paint',
		video: '',
		image: '',
		poster: '',
	},
	{
		title: 'Outdoor Structures',
		subtitle: 'Deck Refresh',
		description: 'Pressure-washing decks and outdoor surfaces — restoring timber so the garden feels fresh again.',
		icon: 'fence',
		video: '',
		image: '/videos/outdoor.jpg',
		poster: '',
	},
	{
		title: 'Repairs & Tools',
		subtitle: 'Kitchen Install',
		description: 'Fitting cabinets and appliances in place — steady hands, clean lines, and a kitchen that works again.',
		icon: 'tools',
		video: '',
		image: '',
		poster: '',
	},
	{
		title: 'One Craftsman',
		subtitle: 'Room Refresh',
		description: 'Prep, paint, and finish — one team on the whole job so the room is left clean, bright, and ready to live in.',
		icon: 'hands',
		video: '',
		image: '/videos/craftsman.jpg',
		poster: '',
	},
] as const;

export const services = [
	{
		category: 'Home',
		title: 'Repairs & Maintenance',
		description: 'Doors, plumbing fixes, plaster, silicone, gutters — the details that keep a home feeling solid.',
	},
	{
		category: 'Home',
		title: 'Assembly & Installation',
		description: 'Kitchen units, shelving, TV mounts, curtain rails — fitted cleanly and level, every time.',
	},
	{
		category: 'Home',
		title: 'Painting & Finishing',
		description: 'Walls, woodwork, and touch-ups with proper prep — a finish that looks considered, not rushed.',
	},
	{
		category: 'Garden',
		title: 'Garden Care & Planting',
		description: 'Beds, borders, pruning, and seasonal planting — gardens that thrive in Irish weather.',
	},
	{
		category: 'Garden',
		title: 'Outdoor Structures',
		description: 'Fencing, decking, pergolas, sheds, and patio work — durable, well-built outdoor living.',
	},
	{
		category: 'Garden',
		title: 'Property Refresh',
		description: 'Room updates, bathroom refreshes, tiling, and full property makeovers — inside and out, one plan.',
	},
] as const;

export const processSteps = [
	{
		title: 'Share Your Vision',
		detail: 'Tell us what needs doing — inside, outside, or both. Photos welcome.',
	},
	{
		title: 'Receive a Clear Plan',
		detail: 'We visit, assess, and send an honest quote before any work begins.',
	},
	{
		title: 'Enjoy the Result',
		detail: 'Skilled work, tidy finish, and a property that feels complete.',
	},
] as const;
