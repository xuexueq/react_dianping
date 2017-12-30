import React from 'react'

import './style.less'

class LoginComponent extends React.Component {
	constructor () {
		super()
		this.state = {
			username: ''
		}
	}

	render() {
		return (
			<div id="login-container">
				<div className="input-container phone-container">
					<i className="iconfont icon-shouji"></i>
					<input 
						type='text'
						placeholder='输入手机号'
						value={this.state.username}
						onChange={this.onChangeHandle.bind(this)}
					/>
				</div>
				<div className="input-container password-container">
					<i className="iconfont icon-yaochi"></i>
					<button>发送验证码</button>
					<input type='text' placeholder='输入验证码' />
				</div>
				<button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
			</div>
		)
	}

	onChangeHandle(e) {
		this.setState({
			username: e.target.value
		})
	}

	clickHandle() {
		this.props.loginHandle(this.state.username)
	}
}

export default LoginComponent