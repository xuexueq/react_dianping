import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header/Header'
import LoginComponent from '../../components/LoginComponent/'
import userInfoAction from '../../actions/userinfo'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isChecking: true
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
		if(userinfo.username) {
			this.goUserPage()
		}else {
			this.setState({
				isChecking: false
			})
		}
	}

	goUserPage() {}

	loginHandle(username) {
		this.props.userInfoAction.update(username)
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