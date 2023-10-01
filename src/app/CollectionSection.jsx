import VariableLetters from '@/components/VariableLetters';
import { useMotionValue, motion } from 'framer-motion';
import Image from 'next/image';

const PRODUCTS = [
	{
		title: 'Ring',
		price: '499',
		image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
	},
	{
		title: 'Ear Ring',
		price: '179',
		image: 'https://images.unsplash.com/photo-1581524475712-e43ca043e144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	},
	{
		title: 'Bracelet',
		price: '349',
		image: 'https://images.unsplash.com/photo-1517857399767-a9dc28f5a734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
	},
	{
		title: 'Necklace',
		price: '249',
		image: 'https://images.unsplash.com/photo-1618522755367-bcbb050438b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	},
];

export default function CollectionSection() {
	let mouseX = useMotionValue(Infinity);

	return (
		<section className='collection-section' data-scroll-section>
			<div className='container'>
				<h2 className='title' onMouseMove={(e) => mouseX.set(e.clientX)} onMouseLeave={() => mouseX.set(Infinity)}>
					<VariableLetters text='NEW COLLECTION' mouseX={mouseX} />
				</h2>
				<div className='products-grid'>
					{PRODUCTS.map((p, idx) => (
						<div className={`product ${idx % 2 === 0 ? '--reverse' : ''}`} key={idx}>
							<motion.div className='product-image'>
								<div className='product-image--inner' data-scroll data-scroll-speed='-0.1'>
									<Image src={p.image} alt='' fill style={{ objectFit: 'cover' }} />
								</div>
							</motion.div>
							<div className='product-info'>
								<div className='product-title'>{p.title}</div>
								<div className='product-price'>$ {p.price}</div>
							</div>
						</div>
					))}
				</div>
				<div className='link-wrapper'>
					<div>
						<span>VIEW ALL</span> <img src='/images/arrow-right.svg' alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
