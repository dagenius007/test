export default () => (
	<section className='footer wrapper--x'>
		<div className='site-footer'>
			<div className='foot-about'>
				<a href='/' className='logo'>
					<img
						src='/imgs/gs3-logo-white.png'
						alt=''
						className='logo'
					/>
				</a>
				<p>
					We simplify the process of supplying and distribution of oil
					products between peddlers and consumers.
				</p>
			</div>
			<div className='foot-grid'>
				<ul className='footer-list none'>
					<li className='footer-list__title'>Quick Links</li>
					<li className=''>
						<a
							href='https://gs3.services/about'
							className='smalltext'
						>
							About
						</a>
					</li>
					<li className=''>
						<a
							href='https://gs3.services#why-choose-us'
							className='smalltext'
						>
							FAQ
						</a>
					</li>
					<li className=''>
						<a
							href='https://gs3.services#how-it-works'
							className='smalltext'
						>
							Delivery Rates
						</a>
					</li>
				</ul>
				<ul className='footer-list none'>
					<li className='footer-list__title'>Legal</li>
					<li className='d-none'>
						<a href='https://gs3.services' className='smalltext'>
							Terms of use
						</a>
					</li>
					<li className='d-none'>
						<a href='https://gs3.services' className='smalltext'>
							Privacy Policy
						</a>
					</li>
					<li className='d-none'>
						<a href='https://gs3.services' className='smalltext'>
							Safety Tips
						</a>
					</li>
				</ul>
				<ul className='footer-list none'>
					<li className='footer-list__title'>Contact</li>
					<li className=''>
						<a
							href='mailto:hello@gs3peddlers.com'
							className='smalltext'
						>
							hello@gs3peddlers.com
						</a>
					</li>
					<li className=''>
						<a href='tel:+23480 00 0000' className='smalltext'>
							telephone : +23480 00 0000
						</a>
					</li>
					<li className='social-media-links mt-0'>
						<a href='#' target='_blank'>
							<svg
								className='facebook-logo'
								width='20'
								height='20'
							>
								<use href='icons/icon-sprite.svg#facebook-logo'></use>
							</svg>
						</a>
						<a href='#' target='_blank'>
							<svg
								className='twitter-logo'
								width='20'
								height='20'
							>
								<use href='icons/icon-sprite.svg#twitter-logo'></use>
							</svg>
						</a>
						<a href='' target='_blank'>
							<svg
								className='linkedin-logo'
								width='20'
								height='20'
							>
								<use href='/icons/icon-sprite.svg#linkedin-logo'></use>
							</svg>
						</a>
						<a href='#' target='_blank'>
							<svg className='insta-logo' width='20' height='20'>
								<use href='/icons/icon-sprite.svg#instagram-logo'></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className='footer--paragraph'>
			<div className='d-flx al-i-c mx-auto-0-l'>
				<p className='m-0'>Powered by</p>
				<svg className='ml-h' width='90' height='24'>
					<use href='/icons/icon-sprite.svg#softcom-logo'></use>
				</svg>
			</div>
			<p>Copyright © 2020 GS3, All rights reserved.</p>
		</div>
	</section>
);
