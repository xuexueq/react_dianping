import React from 'react'

import './style.less'

class OrderIndo extends React.Component {
	render() {
		let data = this.props.data
		return (
			<div>
				{
					data.map((item, index) => {
						return (
							<div className='order-item-container clear-fix' key={index}>
								<div className='order-item-img float-left'>
									<img src={item.img} alt={item.title}/>
								</div>
								<div className="order-item-comment float-right">
									<button>评价</button>
								</div>
								<div className="order-item-content">
									<span>商户：{item.title}</span>
									<span>数量：{item.price}</span>
									<span>价格：￥{item.count}</span>
								</div>								
							</div>

						)
					})
				}

			</div>
		)
	}
}

export default OrderIndo