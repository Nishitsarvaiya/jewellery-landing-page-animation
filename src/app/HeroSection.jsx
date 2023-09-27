import { titleItem, titleLetter, TRANSITION } from '@/lib/motion-animations';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CircularText from '@/components/CircularText';

export default function HeroSection() {
	return (
		<section className='hero-section' data-scroll-section>
			<div className='container'>
				<h1 className='hero-title'>
					<motion.div variants={titleItem} className='hero-title-phrase'>
						{'DISCOVER'.split('').map((l, idx) =>
							l === 'O' ? (
								<motion.div
									className='video-wrapper'
									initial={{ scale: 0 }}
									animate={{
										scale: 1,
										transition: { ...TRANSITION, delay: 1 },
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
					<motion.div variants={titleItem} className='hero-title-phrase'>
						{"WORLD'S BEST".split('').map((l, idx) =>
							l === ' ' ? (
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
					<motion.div variants={titleItem} className='hero-title-phrase'>
						{'JEWELLERY'.split('').map((l, idx) => (
							<motion.span variants={titleLetter} key={idx}>
								{l}
							</motion.span>
						))}
					</motion.div>
				</h1>
				<CircularText text={'Fashion Brand'} />
			</div>
		</section>
	);
}
