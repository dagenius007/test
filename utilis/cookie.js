import cookie from 'js-cookie';
import { setCurrentUser } from 'redux/actions/auth.action';
import Router from 'next/router';

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

export const checkServerSideCookie = (ctx) => {
	if (ctx.isServer) {
		if (ctx.req.headers.cookie) {
			const user = getCookie('user', ctx.req);
			ctx.store.dispatch(setCurrentUser(user));
		}
	} else {
		const token = ctx.store.getState().auth.user;

		if (
			token &&
			user &&
			(ctx.pathname === '/signin' || ctx.pathname === '/signup')
		) {
			setTimeout(function () {
				Router.push('/');
			}, 0);
		}
	}
};
