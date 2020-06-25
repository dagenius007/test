import React from 'react';
import 'public/scss/index.scss';
import { ThemeProvider } from 'styled-components';
import wrapper from 'redux/store';
import Route from 'routes/Route';
import Toast from 'components/Toast';

const theme = {};

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Route>
				<Component {...pageProps} />
				<Toast />
			</Route>
		</ThemeProvider>
	);
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};
	return { pageProps };
};

export default wrapper.withRedux(MyApp);
