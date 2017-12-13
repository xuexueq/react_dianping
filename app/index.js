import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createHashHistory from 'history/createBrowserHistory'

import configStore from './store/configStore'
import RouterMap from './router/routerMap'

const store = configStore()
const history = createHashHistory() //react-router 4

render(
	<Provider store={store}>
		<RouterMap history={history}/>
	</Provider>,
	document.getElementById('root')
)