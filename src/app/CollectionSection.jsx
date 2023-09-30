import VariableLetters from '@/components/VariableLetters';
import { useMotionValue } from 'framer-motion';

export default function CollectionSection() {
	let mouseX = useMotionValue(Infinity);

	return (
		<section className='collection-section' data-scroll-section>
			<div className='container'>
				<h2 className='title' onMouseMove={(e) => mouseX.set(e.clientX)} onMouseLeave={() => mouseX.set(Infinity)}>
					<VariableLetters text='NEW COLLECTION' mouseX={mouseX} />
				</h2>
			</div>
		</section>
	);
}
