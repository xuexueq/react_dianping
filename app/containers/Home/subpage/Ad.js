import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/HomeAd'

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
					this.state.data.length ? <HomeAd /> : <div></div>
				}
				
			</div>
		)
	}

	componentDidMount() {

	}
}

export default Ad