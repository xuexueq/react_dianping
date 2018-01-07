import React from 'react'
import { connect } from 'react-redux'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory() //react-router 4
import { bindActionCreators } from 'redux'

import BuyAndStore from '../../../components/BuyAndStore/'
import storeActions from '../../../actions/store'

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
				<BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
			</div>
		)
	}

	componentDidMount() {
		//验证当前商户是否收藏
		this.storeState()
	}

	storeState() {
		let id = this.props.id
		let store = this.props.store
		let isStore = this.props.isStore

		store.some(item => {
			if(item.id === id) {
				this.setState({
					isStore: true   //将状态更改为已收藏
				})
				//跳出循环
				return true
			}
		})
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

	storeHandle() {
		let loginState = this.checkLogin()
		if( ! loginState) {
			return
		}

		let isStore = this.state.isStore
		let id = this.props.id
		if(isStore) {
			//取消收藏
			this.props.storeActions.rm({id: id})
		}else {
			//进行收藏
			this.props.storeActions.add({id: id})
		}

		//更新状态！！！
		this.setState({
			isStore: !isStore
		})

	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)