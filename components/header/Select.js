const Select = () => {
	return (
		<div class='header__container--input-group d-flx'>
			<div class='select'>
				<a class='select-trigger iflx-center'>
					All Products
					<svg class='dropdown-icon' width='10' height='10'>
						<use href='/icons/icon-sprite.svg#dropdown-arrow'></use>
					</svg>
				</a>
				<div
					data-uk-dropdown='mode: click; animation: uk-animation-slide-bottom-small; pos: top-left; offset: 10'
					class='dropdown'
				>
					<ul>
						<li>
							<a href='' class='dropdown__link'>
								All Products
							</a>
						</li>
						<li>
							<a href='' class='dropdown__link'>
								Newest
							</a>
						</li>
						<li>
							<a href='' class='dropdown__link'>
								Lowest Price
							</a>
						</li>
						<li>
							<a href='' class='dropdown__link'>
								Highest Price
							</a>
						</li>
					</ul>
				</div>
			</div>
			<input
				class='search'
				type='text'
				placeholder='Search product or peddler'
			/>
			<button class='search-btn iflx-center-center'>
				<svg class='search-icon' width='22' height='22'>
					<use href='/icons/icon-sprite.svg#search-icon'></use>
				</svg>
			</button>
		</div>
	);
};

export default Select;
