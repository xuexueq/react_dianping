import React from 'react'

import Star from '../Star/'
import './style.less'

class CommentList extends React.Component {
	render() {
		return (
			<div className='detail-comment-info'>
				<h2>用户点评</h2>
				<div className='comment-list'>
					{
						this.props.data.map((item, index) => {
						return (
								<div key={index} className="comment-item">
									<h3>
										<i className="iconfont icon-user"></i>
										&nbsp;
										<span>{item.username}</span>
									</h3>
									<Star star={item.star}/>
									<p>{item.comment}</p>
								</div>
							)
						})
					}
				</div>
			</div>

		)
	}
}

export default CommentList