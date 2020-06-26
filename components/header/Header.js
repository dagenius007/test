import Select from './Select';
import logo from 'public/img/gs3-logo.png';
import MobileHeader from './MobileHeader';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<Link href='/' className=''>
					<a>
						<img className='logo' src={logo} alt='GS3 Logo' />
					</a>
				</Link>

				<div className='header__container--content-area d-flx'>
					<Select />
					<div className='header__container--buttons iflx-center'>
						<Link href='/login'>
							<a className='btn--primary-link'>Log in</a>
						</Link>

						<a href='/' className='btn--primary'>
							Start Selling
						</a>
					</div>
				</div>
				<button
					className='header__container--toggler uk-button uk-button-default uk-margin-small-right'
					type='button'
					data-uk-toggle='target: #offcanvas-usage'
				>
					<svg className='menu-icon' width='22' height='22'>
						<use href='/icons/icon-sprite.svg#menu-icon'></use>
					</svg>
				</button>
				<MobileHeader>
					<Select />
				</MobileHeader>
			</div>
		</header>
	);
};

export default Header;
