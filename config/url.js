// export default (url="") => {
// 	let URL;

// 	if (!process.browser) {
// 		if (url.includes('marketer.gs3.services')) {
// 			URL = 'https://api.gs3.services/v1';
// 		} else if (url.includes('peddlers-admin.bluegreensoft.com')) {
// 			URL = ' https://api-admin-peddlers.bluegreensoft.com/v1';
// 		} else {
// 			URL = 'http://54.163.111.153:8080/v1';
// 		}
// 	} else {
// 		if (window.location.href.includes('marketer.gs3.services')) {
// 			URL = 'https://api.gs3.services/v1';
// 		} else if (
// 			window.location.href.includes('peddlers-admin.bluegreensoft.com')
// 		) {
// 			URL = ' https://api-admin-peddlers.bluegreensoft.com/v1';
// 		} else {
// 			URL = 'http://54.163.111.153:8080/v1';
// 		}
// 	}
// 	return URL;
// };

let URL;

if (process.browser) {
	// client-side-only code
	// Production API
	if (window.location.href.includes('marketer.gs3.services')) {
		URL = 'https://api.gs3.services/v1';
	} else if (window.location.href.includes('peddlers-admin.bluegreensoft.com')) {
		URL = ' https://api-admin-peddlers.bluegreensoft.com/v1';
	} else {
		URL = 'http://54.163.111.153:8080/v1';
	}
}
export { URL };
