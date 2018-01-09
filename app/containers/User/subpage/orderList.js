import React from 'react'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import './style.less'
import { getOrderData, submitCommentData } from '../../../fetch/getData'
import OrderInfo from '../../../components/OrderInfo/'

class OrderList extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	render() {
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				{
					this.state.data.length
					? <OrderInfo data={this.state.data} submitComment={this.submitComment.bind(this)}/>
					: '暂无订单'
				}
			</div>
		)
	}

	componentDidMount() {
		if( ! this.props.username) {
			hashHistory.push({
				pathname: '/Login'
			})

			return
		}

		this.getData()
	}

	getData() {
		let username = this.props.username
		let result = getOrderData(username)

		result.then(res => res.json())
		.then(json => {
			this.setState({
				data: json
			})
		}).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
	}

	submitComment(id, value, callback) {
		let result = submitCommentData({id: id, comment: value})
		result.then(res => res.json())
		.then((json) => {
			if(json.noerr === 0) {
				callback()
			}
		})
	}
}

export default OrderList