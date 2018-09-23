import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'
// import createHashHistory from 'history/createHashHistory'
// import createHistory from 'history/createBrowserHistory';
import configStore from './store/configStore'
import RouterMap from './router/routerMap'

import './static/css/common.less'

const store = configStore()
// const history = createHistory() //react-router 4

render(
	<Provider store={store}>
		<RouterMap />
	</Provider>,
	document.getElementById('root')
)