import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/HomeAd'
import {
	getAdData
} from '../../../fetch/getData'

class Ad extends React.Component {
	constructor() {
		super();
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data: []
		}
	}

	render() {
		return (
			<div>
				{
					this.state.data.length ? <HomeAd data={this.state.data} /> : <div>无广告数据</div>
				}				
			</div>
		)
	}

	componentDidMount() {
		//获取广告数据
		let result = getAdData('/api/homead')

		result.then(res => {
				//console.log(res)
				return res.json()
			})
			.then(json => {
				let data = json
					//console.log(data)

				if (data.length) {
					//console.log('homead', data)
					this.setState({
						data: data
					})
				}

			})
			.catch(ex => {
				// 发生错误
				if (__DEV__) {
					console.error('首页广告模块获取数据报错, ', ex.message)
				}
			})
	}
}

export default Ad