import 'whatwg-fetch'
import 'es6-promise'

export function getAdData(url) {
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}

export function getListData(page, cityName) {
	let url = '/api/homelist/' + encodeURIComponent(cityName) + '/' + page
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}