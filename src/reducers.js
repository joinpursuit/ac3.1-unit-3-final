
const mainReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_ITEM':
      return state + action.item
    case 'REMOVE_ITEM':
      return state - action.item
    // case 'NUM_ITEM':
    //  return state + action.num
    default:
    return state
  }
}

export default mainReducer;
