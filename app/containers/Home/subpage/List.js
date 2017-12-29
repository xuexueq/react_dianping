import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {
	getListData
} from '../../../fetch/getData'
import ListComponent from '../../../components/list/ListComponent'
import LoadMore from '../../../components/LoadMore/LoadMore'

class List extends React.Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			data: [],
			page: 0, //加载数据的页数
			hasMore: false, //记录当前状态下，是否还有更多数据,由后端返回
			isLoadingMore: false //是否正在加载中
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

	//加载更多数据
	loadMoreData() {
		this.setState({
			isLoadingMore: true
		})

		let page = this.state.page
		this.getData(page)
	}

	//获取首页数据
	componentDidMount() {
		//console.log('cityname', this.props.cityName)
		this.getData(this.state.page)
	}

	//获取后台列表数据
	getData(page) {
		let cityName = this.props.cityName
		let result = getListData(page, cityName)

		result.then(res => {
				//console.log(res)
				return res.json()
			})
			.then(json => {
				let data = json.data
				let hasMore = json.hasMore
					//console.log(data)
				if (data.length) {
					this.setState({
						data: this.state.data.concat(data),
						hasMore: hasMore,
						page: this.state.page + 1,
						isLoadingMore: false
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