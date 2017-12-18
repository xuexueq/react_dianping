import React from 'react'

import {
	getListData
} from '../../../fetch/getData'
import ListComponent from '../../../components/list/ListComponent'
import LoadMore from '../../../components/LoadMore/LoadMore'

class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			page: 0,
			hasMore: false,
			isLoadingMore: false
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
				{
					this.state.hasMore
					? <LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>
					: ''
				}
			</div>
		)
	}

	loadMoreData() {
		this.setState({
            isLoadingMore: true
        })

        //console.log('1', isLoadingMore)

		let page = this.state.page
		this.getData(page)	

		this.setState({
			page: page + 1,
			isLoadingMore: false

		})	
		//console.log('2', isLoadingMore)
	}

	componentDidMount() {
		//获取列表数据
		this.getData(this.state.page)
	}

	getData (page) {
		let result = getListData(page)

		result.then(res => {
				//console.log(res)
				return res.json()
			})
			.then(json => {
				let data = json.data
				let hasMore = json.hasMore
				console.log(data)
				if (data.length) {
					this.setState({
						data: this.state.data.concat(data),
						hasMore: hasMore
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