const _defaultState = {
  buttonItems: ["shirt", "shoes", "hat", "sunglasses"],
  items: [],
  shirt: 0,
  shoes: 0,
  hat: 0,
  sunglasses: 0
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case 'ADD_ITEM': 
      return Object.assign({},oldState, {
        items : [...oldState.items, action.items],
        [action.items]: oldState[action.items]+1
      })
    default: 
      return oldState
  }
}

export default reducer