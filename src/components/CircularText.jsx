import CircleType from 'circletype';
import { useEffect, useRef } from 'react';

export default function CircularText({ text }) {
	const circular = useRef(null);
	const rotated = useRef(null);

	useEffect(() => {
		const circularText = new CircleType(circular.current).dir(-1).radius(50);
	}, []);

	return (
		<div className='circular-text' ref={circular}>
			<div className='rotated' ref={rotated}>
				{text}&nbsp;&#8226;&nbsp;{text}&nbsp;&#8226;&nbsp;{text}&nbsp;&#8226;&nbsp;
			</div>
		</div>
	);
}
