import React from 'react'

import './style.less'

class ListComponent extends React.Component {
	render() {
		return (
			<div className='list-container'>
				{
					this.props.data.map((item, index) => {
						return (
							<div key={index} className='list-item clear-fix'>
								<div className='list-img-container float-left'>
									<img src={item.img} alt={item.title}/>
								</div>
								<div className='item-content'>
									<div className="item-title-container  clear-fix">
										<h3 className="float-left">{item.title}</h3>
										<span className="float-right">{item.distance}</span>
									</div>
									<p>{item.subTitle}</p>
									<div className="item-price-container clear-fix">
										<span className="price float-left">￥{item.price}</span>
										<span className="mumber float-right">已售{item.number}</span>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}


}

export default ListComponent