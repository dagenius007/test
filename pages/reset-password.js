import React, { useState } from 'react';
import { resetPassword } from 'redux/actions/auth.action';
import { connect } from 'react-redux';
import { resetPasswordSchema } from 'utilis/validation';
import { ButtonLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import eyeIcon from 'public/icons/eye-open.svg';
import eyeCloseIcon from 'public/icons/eye-close.svg';
import resetPasswordIcon from 'public/icons/reset-password-icon.svg';
import Router from 'next/router';

const ResetPassword = ({ resetPassword, isLogging, success, query }) => {
	const [filedErrors, setFieldErrors] = React.useState({});
	const [isVisible, setIsVisible] = React.useState(false);
	const [isVisibleReType, setIsVisibleReType] = React.useState(false);
	const [key, setKey] = useState('');

	React.useEffect(() => {
		const { key } = query;
		setKey(key);
	}, []);

	React.useEffect(() => {
		if (success) {
			Router.push('/login');
		}
	}, [success]);

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		validationSchema: resetPasswordSchema,
		onSubmit(values) {
			resetPassword(values.password, key);
		},
	});

	React.useEffect(() => {
		setFieldErrors({ ...errors });
	}, [errors]);

	return (
		<form className='form__container' onSubmit={handleSubmit}>
			<div className='form__heading__container'>
				<img src={resetPasswordIcon} alt='' />

				<h3>Reset your password</h3>
				<p>Create a new password for your account</p>
			</div>

			<div className='input__container'>
				<p>New Password</p>
				<input
					name='password'
					type={isVisible ? 'text' : 'password'}
					onChange={handleChange}
					values={values.password}
				/>
				<img
					src={isVisible ? eyeIcon : eyeCloseIcon}
					alt=''
					onClick={() => setIsVisible((isVisible) => !isVisible)}
				/>
				{filedErrors.password ? (
					<p className='error'>{filedErrors.password}</p>
				) : (
					''
				)}
			</div>

			<div className='input__container'>
				<p>Re-enter New Password</p>
				<input
					name='confirmPassword'
					type={isVisibleReType ? 'text' : 'password'}
					onChange={handleChange}
					values={values.password}
				/>
				<img
					src={isVisibleReType ? eyeIcon : eyeCloseIcon}
					alt=''
					onClick={() =>
						setIsVisibleReType((isVisible) => !isVisible)
					}
				/>
				{filedErrors.confirmPassword ? (
					<p className='error'>{filedErrors.confirmPassword}</p>
				) : (
					''
				)}
			</div>

			<div className='input__container submit__container'>
				<button type='submit' disabled={isLogging}>
					{isLogging ? <ButtonLoader /> : 'Reset password'}
				</button>
			</div>
		</form>
	);
};

ResetPassword.getInitialProps = ({ query }) => {
	return { query };
};

const map_state_to_props = ({ auth, message }) => {
	return {
		success: message.success,
		isLogging: auth.isLogging,
	};
};

export default connect(map_state_to_props, { resetPassword })(ResetPassword);
