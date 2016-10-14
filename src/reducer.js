import { ADD_CLOTHES } from './action.js'

const _defaultState = {
  clothes: []
}

 var addClothing = (garment) => ({
  type: ADD_CLOTHES,
  wardrobe: garment
})



const reducer = (oldState = _defaultState, action) => {
  switch(action.type)  {
    case ADD_CLOTHES:
      return ({
        clothes: [
          ...oldState.clothes,
          action.garments
        ]
      })
    default:
      return oldState;
  }
}

export default reducer;
