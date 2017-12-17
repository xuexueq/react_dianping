import 'whatwg-fetch'
import 'es6-promise'

export default function getAdData (url) {
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}