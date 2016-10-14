const _defaultState = {
	items: []
}

const reducer = (oldState = _defaultState, action) => {
	switch(action.type) {
		case "ADD_ITEM":
			return {items: [...oldState.items, action.item]}
		case "REM_ITEM":

			let otherItems = oldState.items.filter( apparel => apparel !== action.item ? apparel : null)

			let oneLessRemItem = oldState.items.filter( apparel => apparel === action.item ? apparel : null)

			oneLessRemItem = oneLessRemItem.slice(1, [oneLessRemItem.length])
			
			return {items: [...otherItems, ...oneLessRemItem]}
		default:
			return oldState
	}
}

export default reducer;