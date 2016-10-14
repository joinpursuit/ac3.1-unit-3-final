import {ADD_ITEMS} from './actions';

const _defaultState = {
	items: [], state: 0
}

const reducer = (oldState = _defaultState, action) => {
	switch(action.type) {
		case ADD_ITEMS:
			return ({
				state: +1,
				items: [
				...oldState.items,
				action.item
				]
			})
		default:
			return oldState
	}
}

export default reducer