'use client';

import useLocoScroll from '@/hooks/useLocoScroll';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import AboutSection from './AboutSection';
import CollectionSection from './CollectionSection';
import StoreSection from './StoreSection';
import useCustomCursor from '@/hooks/useCustomCursor';
import { useRef } from 'react';

export default function Home() {
	const cursorRef = useRef();
	useLocoScroll();
	const cursor = useCustomCursor();

	return (
		<motion.main initial='initial' animate='animate'>
			<HeroSection />
			<GallerySection />
			<AboutSection />
			<CollectionSection />
			<StoreSection />
		</motion.main>
	);
}
