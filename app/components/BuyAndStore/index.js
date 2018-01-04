import React from 'react'

import './style.less'

class BuyAndStore extends React.Component {
	render() {
		return (
			<div className="buy-store-container clear-fix">
				<div className="item-container float-left" onClick={this.storeHandle.bind(this)}>
					{
						this.props.isStore
						? <button className="selected">已收藏</button>
						: <button>收藏</button>
					}
				</div>
				<div className="item-container float-right" onClick={this.buyHandle.bind(this)}>
					<button>购买</button>
				</div>
			</div>
		)
	}

	storeHandle() {
		this.props.storeHandle()	
	}

	buyHandle() {
		this.props.buyHandle()
	}
}

export default BuyAndStore