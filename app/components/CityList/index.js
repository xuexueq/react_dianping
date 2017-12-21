import React from 'react'

import './style.less'

class CityList extends React.Component {
	clickHandle(newCity) {
		this.props.changeFn(newCity)
	}

	render() {
		return (
			<div className='city-list-container'>
				<h3>热门城市</h3>
				<ul className='clear-fix'>
					<li>
						<span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '安徽')}>安徽</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '河北')}>河北</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '河南')}>河南</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '湖南')}>湖南</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '湖北')}>湖北</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '齐齐哈尔')}>齐齐哈尔</span>
					</li>
					<li>
						<span onClick={this.clickHandle.bind(this, '新疆')}>新疆</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default CityList