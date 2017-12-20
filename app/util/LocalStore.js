function getItem(key) {
	let value
	try {
		value = localStorage.getItem(key)
	} catch (ex) {
		//开发环境下提示error
		if (_DEV_) {
			console.log('LocalStorage.getItem报错，', ex.message)
		}
	} finally {
		return value
	}
}

function setItem(key, value) {
	try {
		// ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
		localStorage.setItem(key, value)
	} catch (ex) {
		//开发环境下提示error
		if (_DEV_) {
			console.log('localStorage.setItem报错, ', ex.message)
		}
	}
}


export default {
	getItem
}