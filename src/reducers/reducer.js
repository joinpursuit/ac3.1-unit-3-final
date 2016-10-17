const _defaultState = {
  buttonItems: ["Shirt", "Shoes", "Hat", "Sunglasses"],
  items: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case 'ADD_ITEM': 
      return oldState
    default: 
      return oldState
  }
}

export default reducer