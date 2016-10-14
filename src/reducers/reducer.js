import {ADD_ITEM, REMOVE_ITEM} from '../actions/actions.js';

const _defaultState = {cart: {}}

const reducer = (state = _defaultState, action) => {
  var oldCart = state.cart;
  var newCart = {...oldCart};

  switch(action.type) {
    case ADD_ITEM:
      var newItem = action.item;

      newCart[newItem] = (newCart[newItem]) ? newCart[newItem] + 1 : 1;

      return {cart: newCart}

    case REMOVE_ITEM:
      var itemToBeRemoved = action.item;
      var itemCount = newCart[itemToBeRemoved]

      //if item exists in cart
      if(itemCount){
      //When the number of an item is less than 1, remove it from the cart object.
      //Otherwise decrease the items number by 1
      ((itemCount - 1) < 1)  ? delete newCart[itemToBeRemoved] :
        newCart[itemToBeRemoved] -= 1
      }

      return {cart: newCart}

    default:
      return state;
  }
}

export default reducer;
