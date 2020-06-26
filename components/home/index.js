import Banner from './Banner';
import Subscribe from '../Subscribe';
import Products from './Products';
import TopSellers from './TopSellers';
import LatestProducts from './LatestProducts';
import BannerPhrase from './BannerPhrase';
const Index = ({ products }) => {
	return (
		<>
			<Banner />
			<section className='home-main'>
				<Products products={products} />
				{/* <TopSellers /> */}
				<BannerPhrase />
				{/* <LatestProducts /> */}
			</section>
			<Subscribe />
		</>
	);
};

export default Index;
