import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Homeheader extends React.Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdat
	}

	render() {
		return (
			<div id='home-header' className='clear-fix'>
				<div className="home-header-left float-left">
					<span>北京</span>
					&nbsp;
					<i className="iconfont icon-arrow-down-new"></i>
				</div>
				<div className="home-header-right float-right">
					<i className="iconfont icon-user"></i>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="iconfont icon-seach"></i>
						<input type="text" placeholder='请输入关键字'/>
					</div>
				</div>
			</div>
		)
	}
}

export default Homeheader