import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Email is required'),
	password: yup.string().required('Password is required'),
});

export const signUpSchema = yup.object({
	fullName: yup.string().required('Full name is required'),
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Email is required'),
	phoneNumber: yup
		.string()
		.matches(
			/^[0-9]{11}$/,
			'Phone number must be only numbers of length 11',
		),
	password: yup.string().required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Confirm Password is required'),
});

export const emailSchema = yup.object({
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Email is required'),
});

export const userSchema = yup.object({
	fullName: yup.string().required('Full name is required'),
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Email is required'),
	phoneNumber: yup
		.string()
		.matches(
			/^[0-9]{11}$/,
			'Phone number must be only numbers of length 11',
		)
		.notRequired(),
	role: yup.string().required('Role is required'),
});

export const userUpdateSchema = yup.object({
	fullName: yup.string().required('Full name is required'),
	phoneNumber: yup
		.string()
		.matches(
			/^[0-9]{11}$/,
			'Phone number must be only numbers of length 11',
		)
		.notRequired(),
});

export const passwordSchema = yup.object({
	password: yup.string().required('Old Password is required'),
	newPassword: yup
		.string()
		.min(6, 'Must be greater than 6 characters')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('newPassword')], 'Passwords must match')
		.required('Confirm Password is required'),
});

export const resetPasswordSchema = yup.object({
	password: yup
		.string()
		.min(6, 'Must be greater than 6 characters')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Confirm Password is required'),
});

export const passSchema = {
	oldPassword: {
		isRequired: 'Old password is required',
	},
	password: {
		isRequired: 'Password is required',
		isMinLength: {
			message: 'Password must at least be 6 characters long',
			length: 6,
		},
	},
	rpassword: {
		isRequired: 'Please fill out the password a second time',
		isEqual: ({ fields }) => ({
			message: 'The two password must match',
			value: fields.password,
			validateIf: fields.password.length > 0, // this can be a boolean too!
		}),
	},
};
