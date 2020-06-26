import Select from './Select';
import Product from './Product';
const Products = ({ products }) => {
	console.log(products);
	return (
		<div class='products'>
			<div class='products__top iflx-center'>
				<Select />
				<a href='/allproducts/' class='products__top--link'>
					See all
				</a>
			</div>
			<div class='products__option'>
				<ul class=''>
					{products.map((product) => (
						<Product product={product} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Products;
