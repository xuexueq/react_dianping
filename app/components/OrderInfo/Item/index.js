import React from 'react'

import './style.less'

class OrderIndo extends React.Component {
	constructor() {
		super()
		this.state = {
			commentState: 0  //commentState  0-未评价 1-评价中 2-已评价
		}
	}

	render() {
		let item = this.props.data
		return (
			<div className='order-item-container'>	
				<div className='clear-fix'>
					<div className='order-item-img float-left'>
						<img src={item.img} alt={item.title}/>
					</div>
					<div className="order-item-comment float-right">
					{
						this.state.commentState === 0
						? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
						: this.state.commentState === 1
						  ? ''
						  : <button className="btn unseleted-btn">已评价</button>
					}
					</div>
					
					<div className="order-item-content">
						<span>商户：{item.title}</span>
						<span>数量：{item.price}</span>
						<span>价格：￥{item.count}</span>
					</div>
												
				</div>
				{
					this.state.commentState === 1
					? <div className="comment-text-container">
						<textarea style={{width: '100%', height: '80px'}} className="comment-text" ref='commentText'/>
						<button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
						&nbsp;
						<button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
					  </div>
					: ''
				}	
			</div>
		)
	}

	componentDidMount() {
		// 将状态维护到 state 中
		let commentState = this.props.data.commentState
		this.setState({
			commentState: commentState
		})
	}

	showComment() {
		this.setState({
			commentState: 1
		})
	}

	submitComment() {
		let value = this.refs.commentText.value
		let id = this.props.data.id
		if( ! value.trim()) {
			console.log('请输入评论内容')
			return
		}
		this.props.submitComment(id, value, this.submitSuccess.bind(this))
	}

	hideComment() {
		this.setState({
			commentState: 0
		})
	}

	//注意，`this.submitSuccess.bind(this)`作为一个 callback 传递到 `submitComment`中，提交数据成功之后再回调。因此提交数据是一个异步的过程。
	submitSuccess() {
		this.setState({
			commentState: 2
		})
	}
}

export default OrderIndo