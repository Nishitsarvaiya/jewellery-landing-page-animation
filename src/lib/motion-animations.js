export const TRANSITION = { duration: 1.6, ease: [0.6, 0.01, 0.12, 0.96] };
export const titleItem = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			staggerChildren: 0.07,
		},
	},
};

export const titleLetter = {
	initial: {
		y: "100%",
		scale: 1.5,
	},
	animate: {
		y: 0,
		scale: 1,
		rotate: 0,
		transition: TRANSITION,
	},
};

export const fadeInDown = {
	initial: {
		y: "-100%",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { ...TRANSITION, duration: 0.6 },
	},
};
