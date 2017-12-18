import React from 'react'

import HomeHeader from '../../components/HomeHeader/'
import Category from '../../components/Category/'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeHeader />
				<Category />
				<div style={{height: '15px'}}></div>
				<Ad />
				<List />
			</div>
		)
	}
}

export default Home