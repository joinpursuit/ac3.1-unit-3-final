const addShirts = () => ({
	type: 'ADD_SHIRTS',
	item: 'shirts'
})
const addShoes = () => ({
	type: 'ADD_SHOES',
	item: 'shoes'
})
const addHats = () => ({
	type: 'ADD_HATS',
	item: 'hats'
})
const addSunnies = () => ({
	type: 'ADD_SUNNIES',
	item: 'sunnies'
})

const clearShirts = () => ({
	type: 'CLEAR_SHIRTS'
})
const clearShoes = () => ({
	type: 'CLEAR_SHOES'
})
const clearHats = () => ({
	type: 'CLEAR_HATS'
})
const clearSunnies = () => ({
	type: 'CLEAR_SUNNIES'
})

export {addShirts, addShoes, addHats, addSunnies, clearShirts, clearShoes, clearHats, clearSunnies}