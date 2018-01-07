const initialState = []

export default function store(state=initialState, action) {
	console.log('storeReducer',state)
	switch(action.type) {
		case 'STORE_ADD':
			return [
				...state,
				{
					id: action.data.id
				}
			]
		case 'STORE_RM':
			let newState = state.filter(item => {
				return item.id != action.data.id
			})
			return [
				//...state  触发了页面view的变化，数据未取消
				...newState
			]
			
		default:
			return state
	}
}