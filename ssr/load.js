const fs = require('fs');
const path = require('path');
require('isomorphic-fetch');

export function loadTemplate() {
	return fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
}

export function loadListData(page, cityName, protocol, host) {
	const baseUrl = `${protocol}://${host}`;
	console.log('\n\nbaseUrl\n', baseUrl);
	let url = baseUrl + '/api/homelist/' + encodeURIComponent(cityName) + '/' + page
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}
