import React from 'react'

import './style.less'

class UserInfo extends React.Component {
	render() {
		return (
			<div className="userinfo-container">
				<p>
					<i className='iconfont icon-user'></i>
					&nbsp;
					<span>{this.props.username}</span>
				</p>
				<p>
					<i className='iconfont icon-ionc--'></i>
					&nbsp;
					<span>{this.props.cityname}</span>
				</p>
			</div>
		)
	}
}

export default UserInfo