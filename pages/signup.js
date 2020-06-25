import React from 'react';
import { signUpSchema } from 'utilis/validation';
import { signUp } from 'redux/actions/auth.action';
import eyeIcon from 'public/icons/eye-open.svg';
import eyeCloseIcon from 'public/icons/eye-close.svg';
import signupAvatarIcon from 'public/icons/signup-avatar.svg';
import { connect } from 'react-redux';
import { withLoadWrapper } from 'components/Loaders';
import { ButtonLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import styled from 'styled-components';
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

const SignUp = ({ signUp, loading, success, isLogging }) => {
	// const [loading, setLoading] = React.useState(false);
	const [isVisible, setIsVisible] = React.useState(false);
	const [cisVisible, setcIsVisible] = React.useState(false);
	const [filedErrors, setFieldErrors] = React.useState({});

	React.useEffect(() => {
		if (success) {
			Router.push('/login');
		}
	}, [success]);

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: signUpSchema,
		onSubmit(values) {
			signUp({
				fullName: values.fullName,
				email: values.email,
				phoneNumber: values.phoneNumber,
				password: values.password,
			});
		},
	});

	React.useEffect(() => {
		setFieldErrors({ ...errors });
	}, [errors]);

	return (
		<form className='form__container' onSubmit={handleSubmit}>
			<div className='form__heading__container'>
				<img src={signupAvatarIcon} alt='' />

				<h3>Create an account</h3>
				<p>
					Buy refined Petroleum Products and deliver to your outlet’s
					door step. It’s seamless and easy!
				</p>
			</div>

			<div className='input__container'>
				<p>Full name</p>
				<input
					name='fullName'
					placeholder='Enter your full name'
					placeholder='youremail@example.com'
					onChange={handleChange}
					data-testid='fullName'
					values={values.fullName}
				/>
				{filedErrors.fullName ? (
					<p className='error'>{filedErrors.fullName}</p>
				) : (
					''
				)}
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
				<p>Phone Number</p>
				<input
					name='phoneNumber'
					type='text'
					placeholder='Enter your phone number'
					onChange={handleChange}
					values={values.businessName}
					data-testid='phoneNumber'
				/>
				{filedErrors.phoneNumber ? (
					<p className='error'>{filedErrors.phoneNumber}</p>
				) : (
					''
				)}
			</div>

			<div className='input__container'>
				<p>Create Password</p>
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

			<div className='input__container'>
				<p>Confirm Password</p>
				<input
					name='confirmPassword'
					type={cisVisible ? 'text' : 'password'}
					placeholder='Confirm your password'
					onChange={handleChange}
					values={values.confirmPassword}
					data-testid='confirmPassword'
				/>
				<img
					src={cisVisible ? eyeIcon : eyeCloseIcon}
					alt=''
					onClick={() => setcIsVisible((cisVisible) => !cisVisible)}
				/>
				{filedErrors.confirmPassword ? (
					<p className='error'>{filedErrors.confirmPassword}</p>
				) : (
					''
				)}
			</div>

			<div className='input__container submit__container'>
				<button type='submit' disabled={isLogging}>
					{isLogging ? <ButtonLoader /> : 'Sign Up'}
				</button>
				<AuthTextBottom>
					By clicking on "Sign Up", you agree to our
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
	);
};

// SignUp.getInitialProps = async ({ store }) => {
// 	// store.dispatch(successNotification('Hi hi'));
// 	return {};
// };

const map_state_to_props = ({ message, loader, auth }) => {
	return {
		success: message.success,
		loading: loader.loading,
		isLogging: auth.isLogging,
	};
};

export default connect(map_state_to_props, { signUp })(
	withLoadWrapper(SignUp, ['signUp']),
);
