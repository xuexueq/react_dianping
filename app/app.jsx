import React from 'react'
import {
	Provider
} from 'react-redux'
import RouterMap from './router/routerMap'
import './static/css/common.less'

// const history = createHistory() //react-router 4
const App = (props) => (
	<Provider store={props.store}>
		<RouterMap />
	</Provider>
)

export default App;
