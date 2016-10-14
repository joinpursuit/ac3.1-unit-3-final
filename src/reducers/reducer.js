import React from 'react';

const _defaultState = {
	shoppingCart: [],
	shirtCounter: 0,
	shoesCounter: 0,
	hatCounter: 0,
	glassCounter: 0
}

const reducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_ITEM":
			if 	(action.item === "shirt"){
				return Object.assign({}, state, state.shoppingCart.push(<li>{action.item}</li>), {shirtCounter: state.shirtCounter + 1})
			 } else if (action.item === "shoes"){
			 	return Object.assign({}, state, state.shoppingCart.push(<li>{action.item}</li>), {shoesCounter: state.shoesCounter + 1})
			 } else if (action.item === "hat"){
			 	return Object.assign({}, state, state.shoppingCart.push(<li>{action.item}</li>), {hatCounter: state.hatCounter + 1})
			 } else if (action.item === "sunglasses"){
			 	return Object.assign({}, state, state.shoppingCart.push(<li>{action.item}</li>), {glassCounter: state.glassCounter + 1})
			 }
		// case "REMOVE_ITEM":
		// 	if (action.item === "shirt"){
		// 		var newState = Object.assign({}, state,) 
		// 		newState.shoppingCart.filter(function(val,inx){
		// 			 if(val === "shirt"){
		// 			 	return false;
		// 			 } return;
		// 		}));

		// 	}
		default:
			return state;
	}
}

export default reducer;