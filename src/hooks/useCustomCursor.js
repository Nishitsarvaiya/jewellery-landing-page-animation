'use client';

import MouseFollower from 'mouse-follower';
import 'mouse-follower/src/scss/index.scss';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
MouseFollower.registerGSAP(gsap);

export default function useCustomCursor() {
	const [cursor, setCursor] = useState(null);

	useEffect(() => {
		let cur = new MouseFollower({ visible: true, skewing: 2, speed: 0.6 });
		setCursor(cur);
	}, []);

	return cursor;
}
