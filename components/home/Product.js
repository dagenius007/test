import tank from 'public/img/dpk-tank.png';
const Product = ({ product }) => {
	return (
		<li class='products__option-list'>
			<a class='products__option--image' href='/productdetails/'>
				<img src={tank} alt='An image of a fuel tank' />
				<p class='quantity'>
					N{product?.price?.toLocaleString() || 0}/Litre
				</p>
			</a>
			<div class='products__option--info'>
				<div class='products__option--name d-flx-space'>
					<p>{product?.product || '-'}</p>
					<p>
						{product?.peddler?.businessInformation?.businessName ||
							'-'}
					</p>
				</div>
				<div class='products__option--actions d-flx-space'>
					<div class='ratings'>
						<svg class='rate' width='115' height='20'>
							<use href='/icons/icon-sprite.svg#three-and-half-stars'></use>
						</svg>
					</div>
					<div class='fav-icon'>
						<svg class='fav-icon-unclicked' width='20' height='19'>
							<use href='/icons/icon-sprite.svg#fav-icon-unclicked'></use>
						</svg>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Product;
