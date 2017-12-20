import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
	bindActionCreators
} from 'redux'
import {
	connect
} from 'react-redux'

import LocalStore from '../util/LocalStore'
import userInfoActions from '../actions/userinfo'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			initDone: false
		}
	}

	render() {
		return (
			<div>
				{
					this.state.initDone ? this.props.children : <div>正在加载中...</div>
				}
			</div>
		)
	}

	componentDidMount() {
		//获取位置信息
		let cityName = LocalStore.getItem('city')
		if (cityName == 'null') {
			cityName = '北京'
		}
		this.props.userInfoActions.update({
			cityName: cityName
		})

		this.setState({
			initDone: true
		})
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)