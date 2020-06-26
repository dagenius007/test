import banner from 'public/img/hero-image.png';
const Banner = () => (
	<section className='home-hero'>
		<div className='home-hero__content'>
			<div className='home-hero__content--text'>
				<h1>Searching for oil products in your neighbourhood?</h1>
				<p>
					We simplify the process of supplying and distribution of oil
					products between peddlers and consumers.
				</p>
			</div>
			<div className='home-hero__content--image'>
				<img src={banner} alt='An image of a fuel pump' />
			</div>
		</div>
	</section>
);

export default Banner;
