import padLockIcon from 'public/icons/pad-lock.svg';
import { emailSchema } from 'utilis/validation';
import { forgetPassword } from 'redux/actions/auth.action';
import { signUp } from 'redux/actions/auth.action';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { ButtonLoader } from 'components/Loaders';
import Router from 'next/router';
import Link from 'next/link';

const ForgetPassword = ({ forgetPassword, success, isLogging }) => {
	const [filedErrors, setFieldErrors] = React.useState({});
	const { errors, handleChange, handleSubmit, values } = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: emailSchema,
		onSubmit() {
			forgetPassword(values.email);
		},
	});

	React.useEffect(() => {
		if (success) {
			Router.push('/login');
		}
	}, [success]);

	React.useEffect(() => {
		setFieldErrors({ ...errors });
	}, [errors]);

	return (
		<form className='form__container' onSubmit={handleSubmit}>
			<div className='form__heading__container'>
				<img src={padLockIcon} alt='' />

				<h3>Forgot password?</h3>
				<p>
					Don’t worry! Enter your GS3 Peddler email address and we’ll
					send you a link to reset your password.
				</p>
			</div>

			<div className='input__container'>
				<p>Email Address</p>
				<input
					name='email'
					placeholder='youremail@example.com'
					onChange={handleChange}
					data-testid='email'
				/>
				<p className='error'>{filedErrors?.email}</p>
			</div>

			<div
				className='input__container submit__container'
				disabled={isLogging}
			>
				<button type='submit'>
					{isLogging ? <ButtonLoader /> : 'Submit'}
				</button>
			</div>

			<div className='forgot__password__link--container'>
				<Link className='primary-color' href='/'>
					<a className='primary-color'>Home</a>
				</Link>
			</div>
		</form>
	);
};

const map_state_to_props = ({ auth, message }) => {
	return {
		success: message.success,
		isLogging: auth.isLogging,
	};
};

export default connect(map_state_to_props, { signUp, forgetPassword })(
	ForgetPassword,
);
