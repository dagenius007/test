import * as t from 'redux/types/product.type';
import * as message from 'redux/types/message.type';
import { URL } from 'config/url';
import axios from 'axios';
import { errorHandler } from 'utilis/error';
import request from 'config/baseUrl';

export const getProducts = (skip = 0, limit = 4) => async (dispatch) => {
	// dispatch({
	// 	type: message.GET_SUCCESS,
	// 	payload: 'lllllll',
	// });
	dispatch({ type: t.LOADING_PRODUCTS, payload: true });
	// URL = url(host);
	try {
		const {
			data: {
				data: { count, stocks },
			},
		} = await axios.get(
			` https://api-customer-peddlers.bluegreensoft.com/v1/customer/product?skip=${skip}&limit=${limit}`,
		);

		dispatch({
			type: t.GET_PRODUCTS,
			payload: { data: stocks, count },
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}

	dispatch({ type: t.LOADING_PRODUCTS, payload: false });
};

export const getLatestProducts = (skip, limit) => async (dispatch) => {
	dispatch({ type: t.LOADING_LATEST_PRODUCTS, payload: true });

	try {
		const {
			data: { data },
		} = await axios.post(`${URL}/customer/product`);

		dispatch({
			type: t.GET_LATEST_PRODUCTS,
			payload: { data, count },
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}

	dispatch({ type: t.LOADING_LATEST_PRODUCTS, payload: false });
};

export const getTopProducts = (skip, limit) => async (dispatch) => {
	dispatch({ type: t.LOADING_TOP_PRODUCTS, payload: true });

	try {
		const {
			data: { data },
		} = await axios.post(`${URL}/customer/product`);

		dispatch({
			type: t.GET_TOP_PRODUCTS,
			payload: { data, count },
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}

	dispatch({ type: t.LOADING_TOP_PRODUCTS, payload: false });
};
