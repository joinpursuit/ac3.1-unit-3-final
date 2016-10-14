import {ADD_ITEM, REMOVE_ITEM} from './actions';

const _defaultState = {
	items: [],
}

const reducer = (oldState = _defaultState, action) => {
	switch (action.type){
		case ADD_ITEM:
			return ({				
				items: [
					...oldState.items,
					action.data	
				]
			})
		case REMOVE_ITEM:
		    return ({
		    	
		    })
					
		default:
			return oldState;
	}
}

export default reducer;