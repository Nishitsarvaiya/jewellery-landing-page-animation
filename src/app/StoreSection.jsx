'use client';

import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import { Suspense } from 'react';
import { BackSide } from 'three';

export default function StoreSection() {
	return (
		<section className='store-section'>
			<div className='container'>
				<div className='store-wrapper'>
					<div className='store-wrapper--inner'>
						{/* <Image
							src='https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
							alt=''
							fill
							style={{ objectFit: 'cover' }}
						/> */}
						<Canvas camera={{ position: [0, 0, -2] }}>
							<Suspense fallback={null}>
								<Scene />
							</Suspense>
						</Canvas>
					</div>
				</div>
			</div>
		</section>
	);
}

const Scene = () => {
	const texture = useTexture('/images/store.jpg');

	return (
		<>
			<ambientLight intensity={3} />
			<OrbitControls enableZoom={false} enablePan={false} reverseOrbit={true} />

			<mesh>
				<sphereGeometry args={[5, 64, 64]} />
				<meshStandardMaterial map={texture} side={BackSide} />
			</mesh>
		</>
	);
};
