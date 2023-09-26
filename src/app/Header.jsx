export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='logo'>
						<div>SERA</div>
						<div>Fine Jewellery</div>
					</div>
					<nav className='nav' role='navigation'>
						<ul>
							<li className='--active'>Home</li>
							<li>About</li>
						</ul>
						<ul>
							<li>Collection</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
