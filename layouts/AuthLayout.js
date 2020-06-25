import React, { useEffect } from 'react';
import AuthHeader from 'components/header/AuthHeader';

const AuthLayout = ({ children }) => {
	return (
		<>
			<AuthHeader />
			<div className='app'>
				<section className='main__parent--container'>
					{children}
				</section>
			</div>
		</>
	);
};

export default AuthLayout;
