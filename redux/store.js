import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const middlewares = [logger, thunk];

const devTools =
	// eslint-disable-next-line no-undef
	process.env.NODE_ENV === 'production'
		? applyMiddleware(...middlewares)
		: composeWithDevTools(applyMiddleware(...middlewares));

const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		if (state.count) nextState.count = state.count; // preserve count value on client side navigation
		return nextState;
	} else {
		return rootReducer(state, action);
	}
};

export const store = (context) => {
	return createStore(reducer, devTools);
};

const wrapper = createWrapper(store, {
	debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
