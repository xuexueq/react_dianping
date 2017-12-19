import React from 'react'

import './style.less'

class Header extends React.Component {
	render() {
		return (
			<div id='common-header'>
				<span className='back-icon' onClick={this.clickHander.bind(this)}>
					<i className="iconfont icon-arrow-left"></i>
				</span>
				<h1>{this.props.title}</h1>
			</div>
		)
	}

	clickHander() {
		window.history.back()
	}
}

export default Header