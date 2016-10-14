import React from 'react';

const _defaultState = {
	items: [],
	shoes: 0,
	hats: 0,
	sunglasses: 0,
	shirts: 0
};

export const reducer = function(oldstate = _defaultState, action) {
	switch (action.type) {
		case "ADD_SHOES":
			return 
				object.assign(
					oldstate, 
					items: [...oldstate.items, action.items], 
					shoes: oldstate.shoes + action.shoes
				)
		break;

		case "ADD_HAT":
			return 
				object.assign(
					oldstate, 
					items: [...oldstate.items, action.items], 
					hats: oldstate.hats + action.hats
				)
		break;

		case "ADD_SUNGLASSES":
			return 
				object.assign(
					oldstate, 
					items: [...oldstate.items, action.items], 
					sunglasses: oldstate.sunglasses + action.sunglasses
				)
		break;

		case "ADD_SHIRT":
			return 
				object.assign(
					oldstate, 
					items: [...oldstate.items, action.items], 
					shirts: oldstate.shirts + action.shirts
				)
		break;

		default:
			return oldstate;
	}
};
