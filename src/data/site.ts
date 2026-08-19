export const SITE = {
	name: 'SAM HANDY DO',
	shortName: 'Sam Handy Do',
	url: 'https://samhandydo.ie',
	title: 'SAM HANDY DO | Premium Home & Garden Craftsman in Ireland',
	description:
		'One skilled craftsman for your entire property — home repairs, garden care, outdoor living, and finishing touches. Premium workmanship across Dublin and surrounding counties.',
	ogDescription:
		'Inside the house, outside in the garden — SAM HANDY DO brings golden-hands craftsmanship to every corner of your home.',
	phone: '+353000000000',
	phoneDisplay: '+353 00 000 0000',
	email: 'hello@samhandydo.ie',
	whatsapp: '353000000000',
	whatsappDefaultMessage: "Hi, I'd like to discuss a home or garden project.",
	areasServed: ['Dublin', 'Kildare', 'Meath', 'Wicklow'],
} as const;

export const pillars = [
	{
		title: 'Your Home',
		subtitle: 'Inside & Out',
		description: 'Repairs, maintenance, assembly, painting, and small renovations — handled with care and precision.',
	},
	{
		title: 'Your Garden',
		subtitle: 'Living Spaces',
		description: 'Planting, pruning, beds, fencing, decking, and outdoor structures — shaped for Irish seasons.',
	},
	{
		title: 'One Craftsman',
		subtitle: 'Every Job',
		description: 'No chasing trades. One trusted pair of hands for the full picture — house and garden together.',
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

export const stats = [
	{ value: '500+', label: 'Projects Delivered' },
	{ value: 'Home & Garden', label: 'One Craftsman' },
	{ value: 'Free', label: 'Consultation & Quote' },
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
