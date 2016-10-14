export function addShirt(item) {
  return{
    type:'ADD_ITEM',
    item
  }
}

export function addPants(item) {
  return{
    type: 'ADD_ITEM',
    item
  }
}

export function addHat(item) {
  return{
    type: 'ADD_ITEM',
    item
  }
}

export function addSunglasses(item) {
  return{
    type: 'ADD_ITEM',
    item
  }
}

//I had no idea how to write add and remove, I am assuming it's through
//mapping but time was running out.

export function removeShirt(item) {
  return{
    type:'REMOVE_ITEM',
    item
  }
}

export function removePants(item) {
  return{
    type: 'REMOVE_ITEM',
    item
  }
}

export function removeHat(item) {
  return{
    type: 'REMOVE_ITEM',
    item
  }
}

export function removeSunglasses(item) {
  return{
    type: 'REMOVE_ITEM',
    item
  }
}
