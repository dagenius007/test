import React from 'react';
import Link from 'next/link';
import logoText from 'public/img/GS3.png';

const AuthHeader = () => {
	// const isLoginRoute = pathname === '/login' || pathname === '/';
	return (
		<header className='top__nav__header'>
			<div>
				<Link href='/'>
					<img src={logoText} alt='' height={50} />
				</Link>
			</div>
			{/* <div className='auth__link--container'>
				<Link to={isLoginRoute ? '/signup' : '/login'}>
					{isLoginRoute ? "Don't have an account?" : 'Already have an account?'}
				</Link>
				<Link className='auth-link-nav' to={isLoginRoute ? '/signup' : '/login'}>
					{isLoginRoute ? 'Register' : 'Sign In'}
				</Link>
			</div> */}
		</header>
	);
};

export default AuthHeader;
