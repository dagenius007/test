import React from 'react';
import Header from 'components/header/Header';
import PrivateHeader from 'components/header/PrivateHeader';
import Footer from 'components/Footer.js';
import { connect } from 'react-redux';

const Layout = ({ user, isAuthenticated, children }) => {
	return (
		<div className='site-wrapper'>
			{isAuthenticated ? <PrivateHeader user={user} /> : <Header />}
			<div className='app'>
				<main className='site-main'>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

const map_state_to_props = ({ auth }) => {
	return {
		isAuthenticated: auth.isAuthenticated,
		user: auth.user,
	};
};

export default connect(map_state_to_props, null)(Layout);
