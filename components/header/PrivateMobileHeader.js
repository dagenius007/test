export default ({ user, children }) => (
	<div id='offcanvas-usage' data-uk-offcanvas='overlay: true'>
		<div className='uk-offcanvas-bar header__container--mobile-nav'>
			<button
				className='uk-offcanvas-close'
				type='button'
				data-uk-close
			></button>
			<div className='mobile-main'>
				<div className='menu user-header__profile profile'>
					<a className='iflx-center' href='#'>
						<img className='avatar' src='/uploads/user.svg' />
						<p className='ml-25 username'>{user.fullName}</p>
					</a>
				</div>
				<a href='' className='menu iflx-center active'>
					<svg className='home-icon' width='24' height='24'>
						<use href='/uploads/icon-sprite.svg#home-active-icon'></use>
					</svg>
					<p className='ml-15'>Home</p>
				</a>
				<a href='' className='menu iflx-center'>
					<svg className='order-icon' width='24' height='24'>
						<use href='/uploads/icon-sprite.svg#order-white-icon'></use>
					</svg>
					<p className='ml-15'>Orders</p>
				</a>
				<a href='' className='user-header__profile menu iflx-center'>
					<div className='notification'>
						<svg
							className='notification-icon'
							width='24'
							height='24'
						>
							<use href='/uploads/icon-sprite.svg#notification-white-icon'></use>
						</svg>
						<span className='uk-badge'>1</span>
					</div>
					<p className='ml-15'>Notifications</p>
				</a>
			</div>
		</div>
	</div>
);
