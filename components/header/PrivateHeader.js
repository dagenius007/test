import logo from 'public/img/gs3-logo.png';
import Link from 'next/link';
import PrivateMobileHeader from './PrivateMobileHeader';
import userSvg from 'public/icons/user.svg';
import { logoutUser } from 'redux/actions/auth.action';
import { connect } from 'react-redux';

const Header = ({ user, logoutUser }) => (
	<header className='user-header'>
		<div className='user-header__container'>
			<Link href='/'>
				<a className=''>
					<img className='logo' src={logo} alt='GS3 Logo' />
				</a>
			</Link>

			<div className='user-header__menu'>
				<a href='' className='menu iflx-center active'>
					<svg className='home-icon' width='24' height='24'>
						<use href='/uploads/icon-sprite.svg#home-active-icon'></use>
					</svg>
					<svg className='home-icon' width='24' height='24' hidden>
						<use href='/uploads/icon-sprite.svg#home-disable-icon'></use>
					</svg>
					<p className='ml-15'>Home</p>
				</a>
				<a href='' className='menu iflx-center'>
					<svg className='order-icon' width='24' height='24' hidden>
						<use href='/uploads/icon-sprite.svg#order-active-icon'></use>
					</svg>
					<svg className='order-icon' width='24' height='24'>
						<use href='/uploads/icon-sprite.svg#order-disable-icon'></use>
					</svg>
					<p className='ml-15'>Orders</p>
				</a>
			</div>
			<div className='user-header__profile'>
				<a className='iflx-center' href='#'>
					<img className='avatar' src={userSvg} />
					<p className='ml-25 username'>{user.fullName}</p>
					{/* <div className='ml-25 notification'>
					<svg className='notification-icon' width='24' height='24'>
						<use href='/uploads/icon-sprite.svg#notification-icon'></use>
					</svg>
					<span className='uk-badge'>1</span>
				</div> */}
				</a>
				<Link href='/login'>
					<a
						onClick={(e) => {
							e.preventDefault();
							logoutUser();
						}}
						className='btn--primary-link'
					>
						Log out
					</a>
				</Link>
			</div>
			<button
				className='user-header__toggler uk-button uk-button-default uk-margin-small-right'
				type='button'
				data-uk-toggle='target: #offcanvas-usage'
			>
				<svg className='menu-icon' width='22' height='22'>
					<use href='/uploads/icon-sprite.svg#menu-icon'></use>
				</svg>
			</button>
			<PrivateMobileHeader user={user} />
		</div>
	</header>
);

const map_state_to_props = ({ product, auth }) => {
	return {
		products: product.products,
		user: auth.user,
	};
};

export default connect(map_state_to_props, { logoutUser })(Header);
