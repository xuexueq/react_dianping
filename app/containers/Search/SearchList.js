import React from 'react'
import { connect } from 'react-redux'

import ListComponent from '../../components/ListComponent/'
import { getSearchData } from '../../fetch/getData'

class SearchList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 0,
			data: []
		}
	}

	render() {
		return (
			<div>
				<ListComponent data={this.state.data}/>
			</div>
		)
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		let category = this.props.category
		let keyword = this.props.keyword
		let page = this.state.page
		let cityName = this.props.userinfo.cityName

		let result = getSearchData(page, cityName, category, keyword)
		result.then((res) => {
			return res.json()
		})
		.then((json) => {
			let data = json.data
			this.setState({
				data: this.state.data.concat(data)
			})
		})
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

export default connect(mapStateToProps)(SearchList)