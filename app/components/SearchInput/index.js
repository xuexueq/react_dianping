import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { message, Button } from 'antd'

import './style.less'

class SearchInput extends React.Component {
	constructor(props) {
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			value: ''
		}
	}

	render() {
		return (
			<input 
				className='search-input'
				type='text'
				placeholder='请输入关键字'
				onChange={this.ChangeHandle.bind(this)}
				onKeyUp={this.KeyUpHandle.bind(this)}
				value={this.state.value}
			/>
		)
	}

	componentDidMount() {
		//搜素框默认值
		this.setState({
			value: this.props.value
		})
	}

	ChangeHandle(e) {
		this.setState({
			value: e.target.value
		})
	}

	KeyUpHandle(e) {
		//按下回车键同时输入框值不为空
		if(e.keyCode !== 13) {
			return
		}

		if(e.target.value ==='') {
			alert('输入框不能为空')
			return
		}

		this.props.enterHandle(this.state.value)
	}
}

export default SearchInput