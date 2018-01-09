import React from 'react'

import Item from './Item/'

class OrderIndo extends React.Component {
	constructor() {
		super()
		this.state = {
			commentState: 0
		}
	}

	render() {
		let data = this.props.data
		return (
			<div>
			{
				data.map((item, index) => {
					return <Item data={item} key={index} submitComment={this.props.submitComment}/>
				})				
			}
			</div>
		)
	}
}

export default OrderIndo