import React from 'react'

import './style.less'

class Star extends React.Component {
	render() {
		let star = this.props.star
		if(star > 5) {
			let star = star % 5 //star最多为5
		}
		return (
			<div className='star-container'>
				{
					[1,2,3,4,5].map((item, index)=>{
						let light = star>=item ? 'light' : ''
						return <i className={`iconfont icon-star ${light}`} key={index}></i>
					})
				}
				
			</div>
		)
	}
}

export default Star