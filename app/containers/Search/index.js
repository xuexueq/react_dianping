import React from 'react'

import SearchHeader from '../../components/SearchHeader/'
import SearchList from './SearchList'

class Search extends React.Component {
	render() {
		let params = this.props.match.params

		return (
			<div>
				<SearchHeader keyword={params.keyword}/>
				<SearchList category={params.category} keyword={params.keyword || ''}/>
			</div>
		)
	}
}

export default Search