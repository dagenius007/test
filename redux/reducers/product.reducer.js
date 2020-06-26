import * as t from 'redux/types/product.type';

const initialState = {
	products: [],
	latestProducts: [],
	topProducts: [],
	loadingProducts: false,
	loadingLatestProduct: false,
	loadingTopProducts: false,
	totalProducts: 0,
	totalLatestProducts: 0,
	totalTopProducts: 0,
};

/**
 * Auth reducer
 * @param {object} state
 * @param {object} action
 * @return {{state : object}}
 */

const product = (state = initialState, action) => {
	switch (action.type) {
		case t.GET_PRODUCTS:
			return {
				...state,
				products: action.payload.data,
				totalProducts: action.payload.count,
			};
		case t.LOADING_PRODUCTS:
			return {
				...state,
				loadingProducts: action.payload,
			};
		case t.GET_LATEST_PRODUCTS:
			return {
				...state,
				latestProducts: action.payload.data,
				totalProducts: action.payload.count,
			};
		case t.LOADING_LATEST_PRODUCTS:
			return {
				...state,
				loadingLatestProduct: action.payload,
			};
		case t.GET_TOP_PRODUCTS:
			return {
				...state,
				latestProducts: action.payload.data,
				totalProducts: action.payload.count,
			};
		case t.LOADING_TOP_PRODUCTS:
			return {
				...state,
				loadingTopProducts: action.payload,
			};
		default:
			return state;
	}
};

export default product;
