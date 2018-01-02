import React from 'react'
import { connect } from 'react-redux'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory() //react-router 4

import BuyAndStore from '../../../components/BuyAndStore/'

class Buy extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isStore: false
		}
	}
	render() {
		return (
			<div>
				<BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)}/>
			</div>
		)
	}

	checkLogin() {
		let userinfo = this.props.userinfo
		let id = this.props.id

		if(!userinfo.username) {
			hashHistory.push({
				pathname: '/Login/' + encodeURIComponent('/detail/' + id)
			})
			return false
		}
		return true
	}

	goUserPage() {
		hashHistory.push({
			pathname: '/User'
		})
	}

	buyHandle() {
		let loginState = this.checkLogin()
		if(! loginState) {
			return
		}

		//购买操作
		//.....

		//跳到用户中心页面
		this.goUserPage()

	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)