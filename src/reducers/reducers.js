import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions.js";

const _defaultState = {
  items: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
  	case ADD_ITEM: 
  		return ({
  			items: [...oldState.items, action.item]
  		});
  	case REMOVE_ITEM: 
  		return ({
  			items: [...oldState.items, action.item]
  		});

    default:
      return oldState;
  }
}

export default reducer;
