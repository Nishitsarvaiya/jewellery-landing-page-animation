'use client';

import VariableLetters from '@/components/VariableLetters';
import { TRANSITION, imageSlideIn } from '@/lib/motion-animations';
import { animate, motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function AboutSection() {
	let mouseX = useMotionValue(Infinity);
	const container = useRef(null);
	const images = useRef([]);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
			animate();
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<section className='about-section' data-scroll-section ref={container}>
			<div className='container'>
				<h2 className='title' onMouseMove={(e) => mouseX.set(e.clientX)} onMouseLeave={() => mouseX.set(Infinity)}>
					<VariableLetters text='ABOUT US' mouseX={mouseX} />
				</h2>
				<p>
					Sera designs modern, unisex jewellery pieces that are handcrafted from recycled precious metals. In an industry that's
					focused on trends, we believe in timelessness.
				</p>
				<div className='about-grid'>
					<div className='col'>
						<div className='about-image'>
							<span>/ 01</span>
							<motion.div
								className='about-image--inner'
								initial={imageSlideIn.initial}
								whileInView={imageSlideIn.animate}
								viewport={{ once: true }}>
								<Image
									src='https://images.unsplash.com/photo-1633555234047-192d10238f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
									alt=''
									fill
									style={{ objectFit: 'cover' }}
									ref={images.current[0]}
									data-scroll
									data-scroll-speed='-0.2'
								/>
							</motion.div>
						</div>
						<motion.p
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0, transition: TRANSITION }}
							viewport={{ once: true }}>
							Our goal is to create products that are made for life. We encourage people to think about as part of their
							identity and legacy.
						</motion.p>
						<motion.button
							className='btn'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0, transition: TRANSITION }}
							viewport={{ once: true }}>
							More information{' '}
							<svg viewBox='0 0 203 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M72.0077 52.2681C71.4554 52.2717 71.0106 52.7224 71.0143 53.2747C71.018 53.8269 71.4686 54.2717 72.0209 54.268L72.0077 52.2681ZM200.797 23.4697L201.769 23.7056L200.797 23.4697ZM3.04874 23.4697L2.2938 22.8139L3.04874 23.4697ZM72.0209 54.268C92.3447 54.1336 123.191 52.4807 149.681 47.9518C162.92 45.6884 175.124 42.6981 184.394 38.7947C189.03 36.843 192.972 34.6461 195.951 32.167C198.93 29.6877 200.998 26.8801 201.769 23.7056L199.825 23.2338C199.188 25.8579 197.444 28.3221 194.672 30.6298C191.899 32.9378 188.15 35.0433 183.618 36.9514C174.555 40.7678 162.524 43.7271 149.344 45.9804C122.996 50.485 92.2656 52.1341 72.0077 52.2681L72.0209 54.268ZM201.769 23.7056C202.799 19.4624 200.347 15.895 195.968 13.04C191.577 10.1778 184.964 7.81346 176.872 5.91779C160.659 2.12001 138.155 0.125827 114.636 0.00576689C91.1104 -0.11433 66.5073 1.64057 46.0849 5.3683C35.8747 7.23197 26.684 9.5933 19.1853 12.4722C11.7096 15.3422 5.81039 18.7657 2.2938 22.8139L3.80368 24.1255C6.99996 20.446 12.535 17.1677 19.9021 14.3393C27.2462 11.5198 36.3069 9.18614 46.444 7.33579C66.7163 3.63547 91.1915 1.88611 114.626 2.00574C138.068 2.12541 160.406 4.11494 176.415 7.86508C184.434 9.74336 190.777 12.044 194.876 14.7154C198.985 17.394 200.554 20.2287 199.825 23.2338L201.769 23.7056ZM2.2938 22.8139C0.064498 25.3802 -0.541174 28.0592 0.480097 30.6871C1.4567 33.2001 3.85161 35.468 7.11884 37.5111C13.6825 41.6155 24.3803 45.1854 36.9048 48.0096C61.9877 53.6657 94.8552 56.4281 117.85 54.2636L117.663 52.2724C94.9164 54.4135 62.2636 51.6777 37.3447 46.0586C24.8684 43.2453 14.4449 39.7334 8.17924 35.8153C5.03177 33.8471 3.08493 31.8685 2.34427 29.9626C1.64827 28.1717 1.9498 26.2596 3.80368 24.1255L2.2938 22.8139Z'
									fill='#363636'
								/>
							</svg>
						</motion.button>
					</div>
					<div className='col'>
						<div className='about-image'>
							<span>/ 02</span>
							<motion.div
								className='about-image--inner'
								initial={imageSlideIn.initial}
								whileInView={imageSlideIn.animate}
								viewport={{ once: true }}>
								<Image
									src='https://images.unsplash.com/photo-1481980235850-66e47651e431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
									alt=''
									fill
									style={{ objectFit: 'cover' }}
									ref={images.current[1]}
									data-scroll
									data-scroll-speed='-0.2'
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
