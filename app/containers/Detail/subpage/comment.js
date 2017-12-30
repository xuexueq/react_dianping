import React from 'react'

import { getCommentData } from '../../../fetch/getData'
import CommentList from '../../../components/CommentList/'
import LoadMore from '../../../components/LoadMore/LoadMore'

class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			hasMore: false,
			isLoadingMore: false,
			page: 0
		}
	}

	render() {
		return (
			<div>
				{
					this.state.data.length
					? <CommentList data={this.state.data}/>
					: <div></div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.getMoreData.bind(this)}/>
					: ''
				}
			</div>

		)
	}

	componentDidMount() {
		this.getData(0)
	}

	getMoreData() {
		this.setState({
			isLoadingMore: true
		})

		let page = this.state.page
		this.getData(page)
	}

	getData(page) {
		let id = this.props.id
		let result = getCommentData(page, id)
		result.then(res => res.json())
		.then(json => {
			this.setState({
				data: this.state.data.concat(json.data),
				hasMore: json.hasMore,
				page: this.state.page + 1
			})
		}).catch(ex => {
            if (__DEV__) {
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
	}
}

export default Comment