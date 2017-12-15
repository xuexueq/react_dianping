import React from 'react'

import HomeHeader from '../../components/HomeHeader/'
import Category from '../../components/Category/'

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeHeader />
				<Category />
			</div>
		)
	}
}

export default Home