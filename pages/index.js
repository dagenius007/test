import Index from 'components/home';
import React, { Component } from 'react';
import { getProducts } from 'redux/actions/product.action';
import { successNotification } from 'redux/actions/auth.action';
import wrapper from 'redux/store';
import { connect } from 'react-redux';

class Home extends Component {
	static async getInitialProps({ Component, ctx, store }) {
		// console.log(req.headers.host , '-------------------------------') ;
		await store.dispatch(getProducts(0, 10));
	}

	render() {
		const { products } = this.props;
		return <Index products={products} />;
	}
}

const map_state_to_props = ({ product, auth }) => {
	return {
		products: product.products,
		user: auth.user,
	};
};

export default connect(map_state_to_props, { getProducts })(
	wrapper.withRedux(Home),
);
