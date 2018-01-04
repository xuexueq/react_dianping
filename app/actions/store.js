export default {
	rm: function (data) {
		return {
			type: 'STORE_RM',
			data
		}
	},

	add: function (data) {
		return {
			type: 'STORE_ADD',
			data
		}
	}
}