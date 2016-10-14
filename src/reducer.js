import { ADD_ITEM } from './actions.js'


const _defaultState = {
	items: []
}


const mainReducer = (oldState = _defaultState , action) => {
    switch(action.type) {
    case ADD_ITEM:
      return ({
        items: [
          ...oldState.items,
          action.item
        ]
      })
    default:
      return oldState;
  }
}

export default mainReducer;