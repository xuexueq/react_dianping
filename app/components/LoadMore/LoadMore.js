import React from 'react'

class LoadMore extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.isLoadingMore
					? <div>加载中</div>
					: <div onClick={this.LoadMoreHandler.bind(this)}>加载更多</div>
				}
			</div>
		)
	}

	LoadMoreHandler() {
		this.props.loadMoreFn()
	}
}

export default LoadMore