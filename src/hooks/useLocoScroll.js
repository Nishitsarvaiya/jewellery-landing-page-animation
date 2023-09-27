"use client";

import { useEffect } from "react";

export default function useLocoScroll() {
	useEffect(() => {
		let tempScroll = null;
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			tempScroll = new LocomotiveScroll();
		})();

		return () => tempScroll && tempScroll.destroy();
	}, []);
}
