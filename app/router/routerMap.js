import React from 'react'
import {
	Router,
	Route,
	IndexRoute,
	Switch
} from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home/'
import NotFound from '../containers/NotFound'

class routerMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={(props) => (
					<App {...props}>
						<Switch>
							<Route exact path='/' component={Home} /> {/*exact关键字，这个关键字是将"/"做唯一匹配，否则"/"和"/xxx"都会匹配到path为"/"的路由*/}
							<Route component={NotFound}/>								
						</Switch>
					
					</App>
				)} />
			</Router>
		)
	}
}

export default routerMap