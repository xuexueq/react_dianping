import React from 'react'

import Header from '../../components/Header/Header'
import Info from './subpage/Info'

class Detail extends React.Component {
	render() {
		let id = this.props.match.params.id
		return (
			<div>
				<Header title='商户详情'/>
				<Info id={id}/>
			</div>

		)
	}
}

export default Detail