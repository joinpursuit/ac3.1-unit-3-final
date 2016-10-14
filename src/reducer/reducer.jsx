const _defaultState ={ shirts: [], shoes: [], hats: [], sunnies: [] }

const reducer = (state = _defaultState, action) => {
	switch(action.type) {
		case 'ADD_SHIRTS':
			return Object.assign({}, state, {shirts: [...state.shirts, action.item]})
		case 'ADD_SHOES':
				return Object.assign({}, state, {shoes: [...state.shoes, action.item]})
		case 'ADD_HATS':
				return Object.assign({}, state, {hats: [...state.hats, action.item]})
		case 'ADD_SUNNIES':
				return Object.assign({}, state, {sunnies: [...state.sunnies, action.item]})

		case 'CLEAR_SHIRTS':
			return Object.assign({}, state, {shirts: []})
		case 'CLEAR_SHOES':
			return Object.assign({}, state, {shoes: []})
		case 'CLEAR_HATS':
			return Object.assign({}, state, {hats: []})
		case 'CLEAR_SUNNIES':
			return Object.assign({}, state, {sunnies: []})

		default:
			return state
	}
}

export default reducer;

