import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VariableLetters({ mouseX, text }) {
	return (
		<>
			{text.split("").map((l, idx) =>
				l == " " ? (
					<span style={{ display: "inline-block" }} key={idx}>
						&nbsp;
					</span>
				) : (
					<VariableLetter mouseX={mouseX} key={idx}>
						{l}
					</VariableLetter>
				)
			)}
		</>
	);
}

const VariableLetter = ({ mouseX, children }) => {
	const ref = useRef(null);

	let distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	let transformedFontWeight = useTransform(distance, [-220, 0, 220], [100, 900, 100]);
	let fontWeight = useSpring(transformedFontWeight, { mass: 0.1, stiffness: 150, damping: 15 });

	return (
		<motion.span style={{ display: "inline-block", fontWeight }} ref={ref}>
			{children}
		</motion.span>
	);
};
