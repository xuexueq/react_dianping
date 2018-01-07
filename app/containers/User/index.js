import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header/Header'
import UserInfo from '../../components/UserInfo/'
import OrderList from './subpage/orderList'

class User extends React.Component {
	render() {
		return (
			<div>
				<Header title='用户主页' backRouter='/home'/>
				<UserInfo username={this.props.userinfo.username} cityname={this.props.userinfo.cityName}/>
				<OrderList username={this.props.userinfo.username}/>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps(state) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)