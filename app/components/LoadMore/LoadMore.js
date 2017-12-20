import React from 'react'

class LoadMore extends React.Component {
	render() {
		return (
			<div ref='wrapper' style={{backgroundColor: '#fff', padding: '10px 0', textAlign: 'center', color: '#999'}}>
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

	componentDidMount() {
		let isLoadingMore = this.props.isLoadingMore
		let timeoutId
		let wrapper = this.refs.wrapper
		let loadMoreFn = this.props.loadMoreFn

		const callback = () => {
			console.log('callback', this)
			let top = wrapper.getBoundingClientRect().top
			let windowHeight = window.screen.height
			if (top && top < windowHeight) {
				loadMoreFn()
			}
		}

		// 使用滚动时自动加载更多
		window.addEventListener('scroll', function() {
			//console.log('scroll', this)
			if (isLoadingMore) {
				return
			}
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
			timeoutId = setTimeout(callback, 50)
		})
	}
}

export default LoadMore