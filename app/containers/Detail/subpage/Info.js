import React from 'react'

import DetailInfo from '../../../components/DetailInfo/'
import { getDetailData } from '../../../fetch/getData'

class Info extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}

	render() {
		return (
			<div>
				{
					this.state.data !== null
					? <DetailInfo data={this.state.data}/>
					: <div></div>
				}
			</div>

		)
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		let id = this.props.id
		let result = getDetailData(id)
		result.then(res => res.json())
		.then(json => {
			this.setState({
				data: json
			})
		})
	}
}

export default Info