import action from './actions.js';

const defaultState = {
	shirts: 0,
	shoes: 0,
	hats: 0,
	sunGlasses: 0
}

const reducer = (origin = defaultState, action) => {
	switch (action.type) {
		case 'addShirt':
			return {...origin, shirts: origin.shirts + 1}
		case 'addShoes':
			return {...origin, shoes: origin.shoes + 1}
		case 'addHat':
			return {...origin, hats: origin.hats + 1}
		case 'addSunglasses':
			return {...origin, sunGlasses: origin.sunGlasses + 1}
		case 'removeShirt':
			if (origin.shirts !== 0) {
				return {...origin, shirts: origin.shirts - 1}
			} else {
				return origin
			}
		case 'removeShoes':
			if (origin.shoes !== 0) {
				return {...origin, shoes: origin.shoes - 1}
			} else {
				return origin
			}
		case 'removeHat':
			if (origin.hats !== 0) {
				return {...origin, hats: origin.hats - 1}
			} else {
				return origin
			}
		case 'removeSunglasses':
			if (origin.sunGlasses !== 0) {
				return {...origin, sunGlasses: origin.sunGlasses - 1}
			} else {
				return origin
			}
		default:
			return origin
	}
}

export default reducer