const initialState = {}

export default function userinfo(state = initialState, action) {
	console.log('userinfo-reducers', state)
	switch (action.type) {
		case 'USERINFO_UPDATE':
			return {
				cityName: action.data.cityName
			}

		default:
			return state
	}
}