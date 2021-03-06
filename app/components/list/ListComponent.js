import React from 'react'
import { Link } from 'react-router-dom'

import './style.less'

class ListComponent extends React.Component {
	render() {
		return (
			<div className='list-container'>
				{
					this.props.data.map((item, index) => {
						let id = item.id
						return (
							<div className='list-item clear-fix' key={index}>
								<Link to={`/detail/${id}`}>
									<div className='item-img-container float-left'>
										<img src={item.img} alt={item.title}></img>
									</div>
									<div className='item-content'>
										<div className='item-title-container clear-fix'>
											<h3 className='float-left'>{item.title}</h3>
											<span className='float-right'>{item.distance}</span>
										</div>
										<p className='item-sub-title'>
											{item.subTitle}
										</p>
										<div className='item-price-container clear-fix'>
											<span className='price float-left'>￥{item.price}</span>
											<span className='number float-right'>已售{item.number}</span>
										</div>
									</div>
								</Link>	
							</div>

						)
					})
				}
			</div>
		)
	}
}

export default ListComponent