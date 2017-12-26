import React from 'react'

class ListComponent extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.data.map((item, index) => {
						return <div>{item.img}</div>
					})
				}
			</div>
		)
	}


}

export default ListComponent