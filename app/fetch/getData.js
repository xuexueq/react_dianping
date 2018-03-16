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

export function getSearchData(page, cityName, category, keyword) {
	let keywordStr = keyword ? `/${keyword}` : ''
	let url = `api/searchlist/${encodeURIComponent(cityName)}/${page}/${category}${keywordStr}`
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}

export function getDetailData(id) {
	let url = `/api/detail/info/${id}`
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}

export function getCommentData(page, id) {
	let url = `/api/detail/comment/${id}/${page}`
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}

export function getOrderData(username) {
	let url = `/api/orderlist/${username}`
	let result = fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}

export function submitCommentData(obj) {
	function stringparams(obj) {
		let result = ''
		let item
		for(item in obj) {
			result += `&${item}=${obj[item]}`
		}
		console.log('comment-result',result)
		return result
	}


	let url = '/api/submit/comment'
	let result = fetch(url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: stringparams(obj)
		//body: JSON.stringify(obj) Fetch发送POST请求body体形式
	})
	return result
}