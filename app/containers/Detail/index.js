import React from 'react'

import Header from '../../components/Header/Header'
import Info from './subpage/Info'
import Comment from './subpage/comment'

class Detail extends React.Component {
	render() {
		let id = this.props.match.params.id
		return (
			<div>
				<Header title='商户详情'/>
				<Info id={id}/>
				<Comment id={id}/>
			</div>

		)
	}
}

export default Detail