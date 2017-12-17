import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './HomeAd.less'

class HomeAd extends React.Component {
	render() {
		return (
			<div id='home-ad'>
				<h2>超值特惠</h2>
				<div className="ad-container clear-fix">
					{
						this.props.data.map((item, index) => {
							return <div>item.title</div>
						})
					}
				</div>
			</div>
		)
	}
}

export default HomeAd