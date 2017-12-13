import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state =  {
			initDone: false
		}
	}

	render() {
		return (
			<div>
				{
					this.state.initDone ? this.props.children : <div>正在加载中...</div>
				}
			</div>
		)
	}
}

export default App