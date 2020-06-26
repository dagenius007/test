const Select = () => {
	return (
		<div className='products__top--select'>
			<a className='select-trigger iflx-center'>
				Select Product
				<svg className='dropdown-icon' width='10' height='10'>
					<use href='/uploads/icon-sprite.svg#dropdown-arrow'></use>
				</svg>
			</a>
			<div
				data-uk-dropdown={
					'mode: click; animation: uk-animation-slide-bottom-small; pos: bottom-left; offset: 10'
				}
				className='dropdown'
			>
				<ul>
					<li>
						<a href='' className='dropdown__link'>
							All Products
						</a>
					</li>
					<li>
						<a href='' className='dropdown__link'>
							Newest
						</a>
					</li>
					<li>
						<a href='' className='dropdown__link'>
							Lowest Price
						</a>
					</li>
					<li>
						<a href='' className='dropdown__link'>
							Highest Price
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Select;
