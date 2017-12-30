const initialState = {}

export default function userinfo(state = initialState, action) {
	console.log('userinfo-reducers', state)
	switch (action.type) {
		case 'USERINFO_UPDATE':
			//return action.data
			return {
				...state,
				cityName: action.data.cityName,
				username: action.username
			}

		default:
			return state
	}
}