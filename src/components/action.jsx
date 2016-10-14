export const ADD_ITEM = "ADD_ITEM"
export const DEL_ITEM = "DEL_ITEM"

export const addButton = (button) => ({type: ADD_ITEM, data: button})
export const delButton = (button) => ({type: DEL_ITEM, data: button})