
export default function (state = [], action) {
  console.log(state)
  switch (action.type) {
    case "CLICK_BUTTON":
      return [...state, action.payload];
    default:
     return state
  }
}
