import Select from './Select';
import Product from './Product';
const TopSellers = () => {
	const [products, setProducts] = React.useState([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
	]);

	return (
		<div class='top-seller'>
			<div class='products__top iflx-center'>
				<p class='products__top--title'>Top Sellers</p>
				<div class='products__top--buttons iflx-center'>
					<div class='prev-icon'>
						<svg class='prev-icon-disabled' width='24' height='24'>
							<use href='/icons/icon-sprite.svg#prev-icon-disabled'></use>
						</svg>
					</div>
					<div class='next-icon'>
						<svg class='next-icon-abled' width='24' height='24'>
							<use href='/icons/icon-sprite.svg#next-icon-abled'></use>
						</svg>
					</div>
				</div>
			</div>
			<div class='products__option'>
				<ul class=''>
					{products.map((product) => (
						<Product />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TopSellers;
