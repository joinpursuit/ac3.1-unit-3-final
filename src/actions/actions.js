const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addItem = (item) => ({
  type: ADD_ITEM,
  item: item
})

const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item: item
})

export {ADD_ITEM, REMOVE_ITEM, addItem, removeItem}
