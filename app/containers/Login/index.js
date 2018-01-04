import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import Header from '../../components/Header/Header'
import LoginComponent from '../../components/LoginComponent/'
import userInfoAction from '../../actions/userinfo'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isChecking: true //验证当前是否是已登录状态
		}
	}

	render() {
		return (
			<div>
				<Header title='登录'/>
				{
					this.state.isChecking
					? <div></div>
					: <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
				}
			</div>
		)
	}

	componentDidMount() {
		this.gocheck()
	}

	gocheck() {
		let userinfo = this.props.userinfo
		//若已登录跳到用户中心界面
		if(userinfo.username) {
			this.goUserPage()
		}else {
			//若未登录，则开始进行登录
			this.setState({
				isChecking: false
			})
		}
	}

	goUserPage() {
		// hashHistory.push({
		// 	pathname: '/User'
		// })
	}

	loginHandle(username) {
		//将username更新到userinfo中，否则全局state将全部被username覆盖掉
		let userinfo = JSON.parse(JSON.stringify(this.props.userinfo))
		userinfo.username = username
		this.props.userInfoAction.update(userinfo)

		let router = this.props.match.params.router || ''
		console.log(router)
		if(router) {
			hashHistory.push({
				//解码
				pathname: decodeURIComponent(router)
			})
		}else {
			//登录后跳到用户中心界面
			//this.goUserPage()		
		}

	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoAction: bindActionCreators(userInfoAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)