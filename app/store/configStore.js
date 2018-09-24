import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configStore(initialState) {
	const store = createStore(rootReducer, initialState,
		// 触发 redux-devtools
		typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}