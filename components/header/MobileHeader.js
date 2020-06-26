export default ({ children }) => (
	<div id='offcanvas-usage' data-uk-offcanvas='overlay: true'>
		<div class='uk-offcanvas-bar header__container--mobile-nav'>
			<button
				class='uk-offcanvas-close'
				type='button'
				data-uk-close
			></button>
			{children}
			<div class='header__container--buttons'>
				<a href='' class='btn--primary-link'>
					Log in
				</a>
				<a href='' class='btn--primary'>
					Start Selling
				</a>
			</div>
		</div>
	</div>
);
