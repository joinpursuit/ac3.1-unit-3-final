const _defaultState = {
	item:[],
	num: 0
}

const ADD_ITEM = "ADD_ITEM"
const ADD_NUM = "ADD_NUM"
const reducer = (state= _defaultState, action) =>{
	switch(action.type){
		case ADD_ITEM:
			var output= Object.assign({}, state)
			output.item.push(action.item)
			return output
		
		case ADD_NUM:
		if(action.num === "hat"){
			return Object.assign({}, state, {num: state.number + 1})
		
		}else if(action.num === "sunglasses"){
			return Object.assign({}, state, {num: state.number + 1})
	
		}else if(action.num === "shoes"){
			return Object.assign({}, state, {num: state.number + 1})
		
		}else if(action.num === "shirt"){
			return Object.assign({}, state, {num: state.number + 1})
		}

		break;
		default:	
			return state
		
	}
}

export default reducer;