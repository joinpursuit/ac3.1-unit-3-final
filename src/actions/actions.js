// EXPORT ACTION TYPES
export const ADD_CLOTHING = 'ADD_CLOTHING';
export const REMOVE_CLOTHING = 'REMOVE_CLOTHING';

// ACTION CREATOR AND EXPORT
export const addClothing = (clothing) => ({
 type:  ADD_CLOTHING,
 clothing,
})

export const removeClothing = (clothing) => ({
  type: REMOVE_CLOTHING,
  clothing
})