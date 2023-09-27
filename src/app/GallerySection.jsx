'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const IMAGES = [
	'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	'https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80',
	'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
	'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	'https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
	'https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
	'https://images.unsplash.com/photo-1618522761561-f1211c4781dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	'https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80',
	'https://images.unsplash.com/photo-1633555234047-192d10238f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
];

export default function GallerySection() {
	const gallery = useRef(null);
	const gallerySection = useRef(null);
	const galleryImages = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
			let amountToScroll = gallery.current.clientWidth - window.innerWidth;

			const tl = gsap.timeline();

			tl.to(
				gallery.current,
				{
					x: -amountToScroll,
				},
				'tl'
			).to(galleryImages.current, { xPercent: -30 }, 'tl');

			ScrollTrigger.create({
				trigger: gallerySection.current,
				start: 'top',
				end: '+=' + amountToScroll,
				pin: true,
				animation: tl,
				scrub: 1,
			});
		}, gallerySection);

		return () => ctx.revert();
	}, []);

	return (
		<section className='gallery-section' ref={gallerySection} data-scroll-section>
			<div className='gallery-wrapper'>
				<div className='gallery' ref={gallery}>
					{IMAGES.map((image, idx) => (
						<div className='gallery-image' key={idx}>
							<span>{'/ 0' + (idx + 1)}</span>
							<div className='gallery-image-inner' ref={(ref) => (galleryImages.current[idx] = ref)}>
								<Image src={image} fill style={{ objectFit: 'cover' }} alt='' />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
