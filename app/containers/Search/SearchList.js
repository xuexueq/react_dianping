import React from 'react'
import { connect } from 'react-redux'

import ListComponent from '../../components/ListComponent/'
import { getSearchData } from '../../fetch/getData'
import LoadMore from '../../components/LoadMore/LoadMore'

const initialState = {
	page: 0,
	data: [],
	hasMore: false,
	isLoadingMore: false	
}

class SearchList extends React.Component {
	constructor(props) {
		super(props)
		this.state = initialState
	}

	render() {
		return (
			<div>
				{
					this.state.data.length 
					? <ListComponent data={this.state.data} />
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

	componentDidMount() {
		this.getData(0)
	}

	loadMoreData() {
		this.setState({
			isLoadingMore: true
		})

		let page = this.state.page
		this.getData(page)
	}

	getData(page) {
		let category = this.props.category
		let keyword = this.props.keyword || ''
		let cityName = this.props.userinfo.cityName

		let result = getSearchData(page, cityName, category, keyword)
		result.then((res) => {
			return res.json()
		})
		.then((json) => {
			let data = json.data
			this.setState({
				data: this.state.data.concat(data),
				hasMore: json.hasMore,
				page: this.state.page + 1
			})
		}).catch(ex => {
				if (__DEV__) {
					console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
				}
		})
	}

	//在搜索页面重新搜索
	//componentDidUpdate(prevProps, prevState, prevContext)中参数数据是没有更新前的，有一次回滚的机会
	componentDidUpdate(prevProps, prevState) {
		const keyword = this.props.keyword
        const category = this.props.category

		if(keyword === prevProps.keyword && category === prevProps.category) {
			return
		}

		this.setState(initialState)
		this.getData(0)
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

export default connect(mapStateToProps)(SearchList)