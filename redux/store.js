import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const middlewares = [logger, thunk];

const initialState = {};

const devTools =
	// eslint-disable-next-line no-undef
	process.env.NODE_ENV === 'production'
		? applyMiddleware(...middlewares)
		: composeWithDevTools(applyMiddleware(...middlewares));

export const store = (context) => {
	return createStore(rootReducer, initialState, devTools);
};

const wrapper = createWrapper(store, {
	debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
