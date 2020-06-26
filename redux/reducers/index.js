import { combineReducers } from 'redux';
import auth from './auth.reducer';
import product from './product.reducer';
import message from './message.reducer';
import loader from './loading.reducer';

export default combineReducers({
	auth,
	message,
	loader,
	product,
});
