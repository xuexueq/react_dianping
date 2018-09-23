import React from 'react'
import {
	Router,
	Route,
	IndexRoute,
	Switch
} from 'react-router-dom'
import history from './history.js';
import App from '../containers/app'
import Home from '../containers/Home/'
import City from '../containers/City/City'
import Search from '../containers/Search/'
import Detail from '../containers/Detail/'
import Login from '../containers/Login/'
import User from '../containers/User/'
import NotFound from '../containers/NotFound'

class routerMap extends React.Component {
	render() {
		return (
			<Router history={history}>
				<Route path='/' component={(props) => (
					<App {...props}>
						<Switch>
							<Route exact path='/' component={Home} /> {/*exact关键字，这个关键字是将"/"做唯一匹配，否则"/"和"/xxx"都会匹配到path为"/"的路由*/}
							<Route exact path='/city' component={City} />
							<Route exact path='/search/:category/:keyword?' component={Search} />
							<Route exact path='/detail/:id' component={Detail} />
							<Route exact path='/Login/:router?' component={Login}/>
							<Route exact path='/User' component={User} />
							<Route component={NotFound}/>
						</Switch>
					</App>
				)} />
			</Router>
		)
	}
}

export default routerMap