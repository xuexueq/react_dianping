import React from 'react'
import { Router, Route, IndexRoute } from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'

class routerMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<div>
					<App />
					<Route path='/' component={Home} />
					<Route path='/city' component={City}/>
				</div>
				
			</Router>
		)
	}
}

export default routerMap