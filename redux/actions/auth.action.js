import * as t from 'redux/types/auth.type';
import * as message from 'redux/types/message.type';
import { URL } from 'config/url';
import axios from 'axios';
import { loading, endLoading } from 'redux/loader.dispatcher';
import { errorHandler } from 'utilis/error';
import request from 'config/baseUrl';
import { setCookie, removeCookie } from 'utilis/cookie';
import Router from 'next/router';

export const clearMessage = () => (dispatch) => {
	dispatch({ type: message.CLEAR_MESSAGES });
};

export const successNotification = (text) => async (dispatch) => {
	dispatch({
		type: message.GET_SUCCESS,
		payload: text,
	});
};

export const signUp = (userData) => async (dispatch) => {
	dispatch({ type: t.IS_LOGGING_IN, payload: true });
	try {
		await axios.post(`${URL}/customer/account/signup`, userData);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Sign up was successful. Check your email to continue',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	dispatch({ type: t.IS_LOGGING_IN, payload: false });
};

export const setCurrentUser = (user) => (dispatch) => {
	dispatch({ type: t.SET_USER, payload: user });
};

export const login = (userData) => async (dispatch) => {
	dispatch({ type: t.IS_LOGGING_IN, payload: true });
	try {
		const {
			data: { token, data },
		} = await axios.post(`${URL}/customer/account/login`, userData);

		// localStorage.setItem('customer_peddlers_token', token);
		dispatch({
			type: message.GET_SUCCESS,
			payload: '',
		});
		setCookie('customer_peddlers_token', token);
		setCookie(
			'customer_peddlers',

			JSON.stringify({
				...data,
			}),
		);

		dispatch(setCurrentUser(data));
		Router.push('/');
	} catch (err) {
		let customError = {};
		if (err && err.response) {
			customError[err.response.status] =
				err.response.data.message || err.response.data.error;
		}
		errorHandler(err, dispatch, customError);
	}
	dispatch({ type: t.IS_LOGGING_IN, payload: false });
};

export const updateProfile = (id, userData) => async (dispatch) => {
	// loading('updateProfile');
	try {
		await request.put(`/admin/account/${id}`, userData);

		let data = JSON.parse(localStorage.system_admin || {});

		localStorage.setItem(
			'system_admin',
			JSON.stringify({
				...data,
				...userData,
			}),
		);

		dispatch({
			type: message.GET_SUCCESS,
			payload: '🔥 User details was updated successfully.',
		});
	} catch (err) {
		let customError = {};
		if (err && err.response) {
			customError[err.response.status] =
				err.response.data.message || err.response.data.error;
		}
		errorHandler(err, dispatch, customError);
	}
	// endLoading('updateProfile');
};

export const verify = (key) => async (dispatch) => {
	dispatch({ type: t.IS_LOGGING_IN, payload: true });
	try {
		await axios.post(`${URL}/customer/account/email/verify`, {
			key,
		});

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Account was verified successfully',
		});
	} catch (err) {
		let customError = {};
		if (err && err.response) {
			customError[err.response.status] =
				err.response.data.message || err.response.data.error;
		}

		errorHandler(err, dispatch, customError);
	}

	dispatch({ type: t.IS_LOGGING_IN, payload: false });
};

export const updatePassword = (userPassword) => async (dispatch) => {
	// loading('updatePassword');
	try {
		await request.post(`/admin/account/update-password`, userPassword);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Your password was updated successfully',
		});
	} catch (err) {
		let customError = {};
		if (err && err.response) {
			customError[err.response.status] = err.response.data.error;
		}

		errorHandler(err, dispatch, customError);
	}
	// loading('updatePassword');
};

export const forgetPassword = (email) => async (dispatch) => {
	dispatch({ type: t.IS_LOGGING_IN, payload: true });
	try {
		await axios.post(`${URL}/customer/account/forgot-password`, {
			email,
		});

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Check your email to continue',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	dispatch({ type: t.IS_LOGGING_IN, payload: false });
};

export const resetPassword = (password, token) => async (dispatch) => {
	dispatch({ type: t.IS_LOGGING_IN, payload: true });
	try {
		await axios.post(`${URL}/customer/account/reset-password`, {
			password,
			token,
		});

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Password reset was successful',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	dispatch({ type: t.IS_LOGGING_IN, payload: false });
};

export const logoutUser = () => (dispatch) => {

	removeCookie('customer_peddlers_token');
	removeCookie('customer_peddlers');
	Router.push('/');
	dispatch(setCurrentUser({}));
};
