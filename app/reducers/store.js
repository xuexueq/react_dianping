const initialState = []

export default function store(state=initialState, action) {
	console.log('storeReducer',state)
	switch(action.type) {
		case 'STORE_ADD':
			state.push(action.data)
			return state
		case 'STORE_RM':
			let newState = state.filter(item => {
				return (item.id != action.data.id)
			})
			return {
				...state,
				...newState
			}
			
		default:
			return state
	}
}