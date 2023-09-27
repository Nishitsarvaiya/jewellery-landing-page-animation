"use client";

import { fadeInDown } from "@/lib/motion-animations";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<motion.header className='header' initial='initial' animate='animate'>
			<div className='container'>
				<div className='header-wrapper'>
					<motion.div className='logo' variants={fadeInDown}>
						<div>SERA</div>
						<div>Fine Jewellery</div>
					</motion.div>
					<nav className='nav' role='navigation'>
						<ul>
							<motion.li className='--active' variants={fadeInDown}>
								Home
							</motion.li>
							<motion.li variants={fadeInDown}>About</motion.li>
						</ul>
						<ul>
							<motion.li variants={fadeInDown}>Collection</motion.li>
							<motion.li variants={fadeInDown}>Contact</motion.li>
						</ul>
					</nav>
				</div>
			</div>
		</motion.header>
	);
}
