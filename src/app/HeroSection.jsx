import CircularText from "@/components/CircularText";
import { titleItem, titleLetter, TRANSITION } from "@/lib/motion-animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className='hero-section' data-scroll-section>
			<div className='container'>
				<h1 className='hero-title'>
					<motion.div variants={titleItem} className='hero-title-phrase' data-scroll data-scroll-speed='-0.06'>
						{"DISCOVER".split("").map((l, idx) =>
							l === "O" ? (
								<motion.div
									className='video-wrapper'
									initial={{ scale: 0 }}
									animate={{
										scale: 1,
										transition: { ...TRANSITION, delay: 0.5 },
									}}
									key={idx}>
									<div className='image' data-scroll data-scroll-speed='0.06'>
										<Image
											src='https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
											alt=''
											fill
										/>
									</div>
								</motion.div>
							) : (
								<motion.span variants={titleLetter} key={idx}>
									{l}
								</motion.span>
							)
						)}
					</motion.div>
					<motion.div variants={titleItem} className='hero-title-phrase' data-scroll data-scroll-speed='-0.1'>
						{"WORLD'S BEST".split("").map((l, idx) =>
							l === " " ? (
								<motion.span variants={titleLetter} key={idx}>
									&nbsp;
								</motion.span>
							) : (
								<motion.span variants={titleLetter} key={idx}>
									{l}
								</motion.span>
							)
						)}
					</motion.div>
					<motion.div variants={titleItem} className='hero-title-phrase' data-scroll data-scroll-speed='-0.14'>
						{"JEWELLERY".split("").map((l, idx) => (
							<motion.span variants={titleLetter} key={idx}>
								{l}
							</motion.span>
						))}
					</motion.div>
				</h1>
				<div className='hero-circular-text' data-scroll data-scroll-orientation='horizontal' data-scroll-speed='0.2'>
					<CircularText text={"Fashion Brand"} />
				</div>
			</div>
		</section>
	);
}
