'use client';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-wrapper'>
					<ul className='socials'>
						<li>FB.</li>
						<li>IN.</li>
						<li>LN.</li>
						<li>TW.</li>
						<li>DB.</li>
						<li>BE.</li>
					</ul>
					<div className='copyrights'>Copyright 2023 By Imran Molla</div>
					<button className='back-top-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						Back To Top
					</button>
				</div>
			</div>
		</footer>
	);
}
