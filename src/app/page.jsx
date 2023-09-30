'use client';

import useLocoScroll from '@/hooks/useLocoScroll';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import AboutSection from './AboutSection';
import CollectionSection from './CollectionSection';

export default function Home() {
	useLocoScroll();

	return (
		<motion.main initial='initial' animate='animate'>
			<HeroSection />
			<GallerySection />
			<AboutSection />
			<CollectionSection />
		</motion.main>
	);
}
