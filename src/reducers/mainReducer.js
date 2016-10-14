// IMPORT ACTION TYPES
import {ADD_CLOTHING, REMOVE_CLOTHING} from '../actions/actions.js';

// ESTABLISH STATE
const _originalState = {
  shirts: [],
  pants: [],
  shoes: [],
  socks: []
}

export const mainReducer = (originalState = _originalState, action) => {
  let stateCopy = Object.assign({}, originalState);
  let shirt = action.clothing === 'shirt';
  let pants = action.clothing === 'pants';
  let shoes = action.clothing === 'shoes';
  let socks = action.clothing === 'socks';
  
  // What is a less repetitive way to do this?
  switch (action.type) {
    case ADD_CLOTHING:
      if(shirt) {
       stateCopy.shirts = originalState.shirts.concat(action.clothing) 
      }
      if(pants) {
        stateCopy.pants = originalState.pants.concat(action.clothing)
      }
      if(shoes) {
        stateCopy.shoes = originalState.shoes.concat(action.clothing)
      }
      if(socks) {
        stateCopy.socks = originalState.socks.concat(action.clothing)
      }
      return stateCopy;
    case REMOVE_CLOTHING:
      if(shirt) {
       stateCopy.shirts = originalState.shirts.slice(-1, 0) 
      }
      if(pants) {
        stateCopy.pants = originalState.pants.slice(-1, 0)
      }
      if(shoes) {
        stateCopy.shoes = originalState.shoes.slice(-1, 0)
      }
      if(socks) {
        stateCopy.socks = originalState.socks.slice(-1, 0)
      }
      return stateCopy;
    default:
      return originalState;
  }      
}
