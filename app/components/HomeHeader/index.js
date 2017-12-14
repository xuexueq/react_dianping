import React from 'react'
import './style.less'

class Homeheader extends React.Component {
	render() {
		return (
			<div id='home-header'>
				<div className="home-header-left">
					<span>beijing</span>
					<i className="iconfont icon-arrow-down"></i>
				</div>
			</div>
		)
	}
}

export default Homeheader