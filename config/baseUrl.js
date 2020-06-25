import axios from 'axios';
import { URL } from './url';

const request = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

request.interceptors.request.use(function (config) {
	const token = localStorage.getItem('system_admin_token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

export default request;
