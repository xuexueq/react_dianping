import React from 'react'

import HomeHeader from '../../components/HomeHeader/'
import Category from '../../components/Category/'
import Ad from './subpage/Ad'

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeHeader />
				<Category />
				<div style={{height: '15px'}}></div>
				<Ad />
			</div>
		)
	}
}

export default Home