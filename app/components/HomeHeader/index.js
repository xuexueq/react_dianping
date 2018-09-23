import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
	Link
} from 'react-router-dom'
import hostory from '../../router/history.js';

import './style.less'
import SearchInput from '../SearchInput/'

class Homeheader extends React.Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdat
	}

	render() {
		return (
			<div id='home-header' className='clear-fix'>
				<div className="home-header-left float-left">
					<Link to='/city'>
						<span>{this.props.cityName}</span>
						&nbsp;
						<i className="iconfont icon-arrow-down-new"></i>
					</Link>
				</div>
				<div className="home-header-right float-right">
					<Link to='/Login'>
						<i className="iconfont icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="iconfont icon-seach"></i>
						&nbsp;
						<SearchInput value='' enterHandle={this.enterHandle.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}

	enterHandle(value) {
		history.push({
			pathname: `/search/all/${encodeURIComponent(value)}`
		})
	}
}

export default Homeheader