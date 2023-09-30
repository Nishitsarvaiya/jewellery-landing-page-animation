'use client';

import CircleType from 'circletype';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CircularText({ text }) {
	const circular = useRef(null);
	const rotated = useRef(null);

	useEffect(() => {
		const circularText = new CircleType(rotated.current).dir(-1);
		circular.current.style.opacity = 1;
		circular.current.style.animation = 'rotate360 5000ms linear infinite';
	}, []);

	return (
		<motion.div className='circular-text' ref={circular}>
			<span className='rotated' ref={rotated}>
				{' '}
				{text} &#8226; {text} &#8226; {text} &#8226;{' '}
			</span>
		</motion.div>
	);
}
