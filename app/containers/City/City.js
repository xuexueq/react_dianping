import React from 'react'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()

import Header from '../../components/Header/Header'
import CurrentCity from '../../components/CurrentCity/'
import CityList from '../../components/CityList/'
import userInfoActions from '../../actions/userinfo'
import localStore from '../../util/LocalStore'

class City extends React.Component {
	render() {
		return (
			<div>
				<Header title='选择城市'/>
				<CurrentCity cityName={this.props.cityName}/>
				<CityList changeFn={this.changeCity.bind(this)}/>
			</div>
		)
	}

	changeCity(newCity) {
		let cityName = this.props.cityName
		cityName = newCity

		//更新到redux
		this.props.userInfoActions.update({
			cityName: cityName
		})

		//将城市存入本地
		localStore.setItem('city', cityName)

		//跳到首页
		history.push({
			pathname: '/'
		})
	}
}

function mapStateToProps(state) {
	return {
		cityName: state.userinfo.cityName
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(City)