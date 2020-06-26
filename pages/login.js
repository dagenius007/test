import React from 'react';
import { loginSchema } from 'utilis/validation';
import { login } from 'redux/actions/auth.action';
import eyeIcon from 'public/icons/eye-open.svg';
import eyeCloseIcon from 'public/icons/eye-close.svg';
import { connect } from 'react-redux';
import { ButtonLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import styled from 'styled-components';
import authKeyIcon from 'public/icons/auth-key.svg';
import Link from 'next/link';
import Router from 'next/router';

const Terms = styled.a`
	color: #d22832;
	&:hover {
		border-bottom: 1px solid #d22832;
	}
`;

const AuthTextBottom = styled.p`
	font-size: 0.8rem;
	width: 100%;
	text-align: center;
`;

const Login = ({ login, success, isLogging, isAuthenticated }) => {
	const [isVisible, setIsVisible] = React.useState(false);
	const [filedErrors, setFieldErrors] = React.useState({});

	React.useEffect(() => {
		if (success) {
			Router.push('/login');
		}
	}, [success]);

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginSchema,
		onSubmit(values) {
			login({
				email: values.email,
				password: values.password,
			});
		},
	});

	React.useEffect(() => {
		setFieldErrors({ ...errors });
	}, [errors]);

	return (
		<section
			className='main__parent--container'
			style={{ backgroundColor: '#FFF7F9' }}
		>
			<form className='form__container' onSubmit={handleSubmit}>
				<div className='form__heading__container'>
					<img src={authKeyIcon} alt='' />

					<h3>Welcome Back</h3>
					<p>Sign in to your account to continue</p>
				</div>

				<div className='input__container'>
					<p>Email Address</p>
					<input
						name='email'
						placeholder='youremail@example.com'
						onChange={handleChange}
						values={values.email}
						data-testid='email'
					/>
					{filedErrors.email ? (
						<p className='error'>{filedErrors.email}</p>
					) : (
						''
					)}
				</div>

				<div className='input__container'>
					<p> Password</p>
					<input
						name='password'
						type={isVisible ? 'text' : 'password'}
						placeholder='Enter your password'
						onChange={handleChange}
						values={values.password}
						minLength={6}
						data-testid='password'
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

				<div className='forgot__password__link--container'>
					<Link href='/forgot-password'>
						<a className='primary-color'>Forgot Password</a>
					</Link>
				</div>

				<div className='input__container submit__container'>
					<button type='submit' disabled={isLogging}>
						{isLogging ? <ButtonLoader /> : 'Login'}
					</button>
					<AuthTextBottom>
						By clicking on "Login", you agree to our{' '}
						<span className='primary-color'>
							<Terms
								id='terms'
								href='https://gs3.services/terms-conditions'
								target='_blank'
							>
								Terms and Conditions
							</Terms>
						</span>
					</AuthTextBottom>
				</div>
			</form>
		</section>
	);
};

const map_state_to_props = ({ message, loader, auth }) => {
	return {
		success: message.success,
		loading: loader.loading,
		isLogging: auth.isLogging,
		isAuthenticated: auth.isAuthenticated,
	};
};

export default connect(map_state_to_props, { login })(Login);
