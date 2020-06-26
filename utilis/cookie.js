import cookie from 'js-cookie';
import { setCurrentUser } from 'redux/actions/auth.action';
import { isEmpty } from 'lodash';

export const setCookie = (key, value) => {
	if (process.browser) {
		cookie.set(key, value, {
			expires: 1,
			path: '/',
		});
	}
};

export const removeCookie = (key) => {
	if (process.browser) {
		cookie.remove(key, {
			expires: 1,
			path: '/',
		});
	}
};

export const getCookie = (key, req) => {
	return process.browser
		? getCookieFromBrowser(key)
		: getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key) => {
	return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
	if (!req.headers.cookie) {
		return {};
	}
	const rawCookie = req.headers.cookie
		.split(';')
		.find((c) => c.trim().startsWith(`${key}=`));
	if (!rawCookie) {
		return {};
	}
	return rawCookie.split('=')[1];
};

export const checkServerSideCookie = (ctx, Router) => {
	if (ctx.isServer) {
		if (ctx.req.headers.cookie) {
			const user = getCookie('customer_peddlers', ctx.req);
			ctx.store.dispatch(setCurrentUser(user));
		}
	} else {
		const user = getCookie('customer_peddlers', ctx.req);
		const token = getCookie('customer_peddlers_token', ctx.req);

	
			// ctx.store.dispatch(
			// 	setCurrentUser(
			// 		isEmpty(user) ? user : JSON.parse(decodeURIComponent(user)),
			// 	),
			// );

		if (
			token &&
			(ctx.pathname === '/login' || ctx.pathname === '/signup')
		) {
			// if (ctx.res) {
			// 	ctx.res.writeHead(301, { Location: '/' });
			// 	ctx.res.end();
			// }
			// // ctx.res.redirect('/');
			// setTimeout(function () {
			// 	Router.push('/');
			// }, 0);
		}
	}
};
