import React from 'react'
import {
	hydrate
} from 'react-dom'
import App from './app.jsx';
import configStore from './store/configStore'
const preloadedState = window.__INITIAL_STATE__;
const store = configStore(preloadedState);

hydrate(
	<App store={store}/>,
	document.getElementById('root')
)