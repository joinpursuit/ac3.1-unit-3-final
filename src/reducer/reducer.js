const _defaultState = {count : 0, count2:0, count3:0, count4:0, shoppingBag: []};

const reducer = (state = _defaultState, action) => {
  switch(action.type) {
    case 'SHIRT':
    return Object.assign({}, state, {count: state.count + 1}, {shoppingBag: state.shoppingBag.concat(action.type)})
    case 'HAT':
    return Object.assign({}, state, {count2: state.count2 + 1}, {shoppingBag: state.shoppingBag.concat(action.type)})
    case 'KICKS':
    return Object.assign({}, state, {count3: state.count3 + 1}, {shoppingBag: state.shoppingBag.concat(action.type)})
    case 'SHADES':
    return Object.assign({}, state, {count4: state.count4 + 1}, {shoppingBag: state.shoppingBag.concat(action.type)})
    default:
    return state;
  }
}

export default reducer
