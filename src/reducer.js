
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.data)
      break;
    default:
    return state
  }
}

export default reducer;