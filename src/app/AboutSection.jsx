"use client";

import VariableLetters from "@/components/VariableLetters";
import { motion, useMotionValue } from "framer-motion";

export default function AboutSection() {
	let mouseX = useMotionValue(Infinity);

	return (
		<section className='about-section' data-scroll-section>
			<div className='container'>
				<motion.h2
					className='about-title'
					data-scroll
					data-scroll-speed='-0.06'
					onMouseMove={(e) => mouseX.set(e.clientX)}
					onMouseLeave={() => mouseX.set(Infinity)}>
					<VariableLetters text='ABOUT US' mouseX={mouseX} />
				</motion.h2>
				<motion.p data-scroll data-scroll-speed='-0.1'>
					Sera designs modern, unisex jewellery pieces that are handcrafted from recycled precious metals. In an industry that's focused on
					trends, we believe in timelessness.
				</motion.p>
			</div>
		</section>
	);
}
