import React, { useState } from 'react';
import { verify } from 'redux/actions/auth.action';
import { connect } from 'react-redux';
import { resetPasswordSchema } from 'utilis/validation';
import { BlockLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import eyeIcon from 'public/icons/eye-open.svg';
import eyeCloseIcon from 'public/icons/eye-close.svg';
import resetPasswordIcon from 'public/icons/reset-password-icon.svg';
import Router from 'next/router';
import wrapper from 'redux/store';

const Verify = ({ verify, error, isLogging, success, query }) => {
	// console.log(store);

	React.useEffect(() => {
		const { key } = query;
		verify(key);
	}, []);

	React.useEffect(() => {
		if (success || error) {
			Router.push('/login');
		}
	}, [success, error]);

	return (
		<>
			<section
				className='main__parent--container'
				style={{ backgroundColor: '#FFF7F9' }}
			>
				{isLogging && (
					<BlockLoader marginTop='70px' marginBottom='70px' />
				)}
			</section>
		</>
	);
};

Verify.getInitialProps = ({ query }) => {
	return { query };
};

const map_state_to_props = ({ auth, message }) => {
	return {
		success: message.success,
		error: message.error,
		isLogging: auth.isLogging,
	};
};

export default connect(map_state_to_props, { verify })(Verify);
