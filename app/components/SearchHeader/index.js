import React from 'react'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory() //react-router 4

import SearchInput from '../SearchInput/'
import './style.less'

class SearchHeader extends React.Component {
	render() {
		return (			
			<div id='search-header' className='clear-fix'>
				<span className='back-icon float-left' onClick={this.clickHandle.bind(this)}>
					<i className="iconfont icon-arrow-left"></i>
				</span>
				<div className="input-container">
					<i className="iconfont icon-seach"></i>
					&nbsp;
					<SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>										
				</div>
			</div>
		)
	}

	clickHandle() {
		window.history.back()
	}

	enterHandle(value) {
		hashHistory.push({
			pathname: `/search/all/${encodeURIComponent(value)}`
		})
	}
}

export default SearchHeader