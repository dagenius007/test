import * as t from 'redux/types/auth.type';
import { isEmpty } from 'lodash';

const initialState = {
	user: {},
	isLogging: false,
	passwordLoading: false,
	isAuthenticated: false,
};

/**
 * Auth reducer
 * @param {object} state
 * @param {object} action
 * @return {{state : object}}
 */

const auth = (state = initialState, action) => {
	switch (action.type) {
		case t.SET_USER:
			console.log(action.payload);
			return {
				...state,
				user: action.payload,
				isAuthenticated: !isEmpty(action.payload),
			};
		case t.IS_LOGGING_IN:
			return {
				...state,
				isLogging: action.payload,
			};
		default:
			return state;
	}
};

export default auth;
