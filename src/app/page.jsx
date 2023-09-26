const titleItem = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		staggerChildren: 0.07,
	},
};

export default function Home() {
	return (
		<main>
			<section className='hero-section'>
				<div className='container'>
					<h1 className='hero-title'>
						<div>
							{'DISCOVER'.split('').map((l) => (
								<span>{l}</span>
							))}
						</div>
						<div>
							{"WORLD'S BEST".split('').map((l) => (
								<span>{l}</span>
							))}
						</div>
						<div>
							{'JEWELLERY'.split('').map((l) => (
								<span>{l}</span>
							))}
						</div>
					</h1>
				</div>
			</section>
		</main>
	);
}
