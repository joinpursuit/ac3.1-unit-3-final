


export const addShirt = (amount, item) => ({ 
  type : "INCREMENT_SHIRT", item: "shirt" 
})

export const addShoes = (amount, item) => ({ 
  type : "INCREMENT_SHOES", item: "shoes" 
})

export const addHat = (amount, item) => ({ 
  type : "INCREMENT_HAT", item: "hat" 
})

export const addSunglasses = (amount, item) => ({ 
  type : "INCREMENT_SUNGLASSES", item: "sunglasses" 
})

export const incrementCounter = (amount, item) => ({ 
  type : "INCREMENT"
})


export const decrementCounter = (amount) => ({ 
  type : "DECREMENT"
})
