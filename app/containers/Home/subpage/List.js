import React from 'react'

import {
	getListData
} from '../../../fetch/getData'
import ListComponent from '../../../components/list/ListComponent'

class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			page: 0
		}
	}

	render() {
		return (
			<div>
				<h2 style={{fontSize: '16px',color: '#666',margin: '10px 15px'}}>猜你喜欢</h2>
				{
					this.state.data.length
					? <ListComponent data={this.state.data}/>
					: <div></div>
				}
			</div>
		)
	}

	componentDidMount() {
		//获取列表数据
		let result = getListData('/api/homelist/' + encodeURIComponent('北京') + '/' + 0)

		result.then(res => {
				//console.log(res)
				return res.json()
			})
			.then(json => {
				let data = json.data
				console.log(data)
				if (data.length) {
					this.setState({
						data: data
					})
				}
			}).catch(ex => {
				if (__DEV__) {
					console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
				}
			})
	}
}

export default List