const defaultState = {"Shirt":[], "Shoes":[], "Hat":[], "Sunglasses":[]}

const reducer = (state = defaultState, action)=>{
	let clothing = action.data;
	switch(action.type){
		case "ADD_ITEM":
			return (Object.assign(
				{},
				state,
				{[clothing]: state[clothing].concat(clothing)}))
		case "DEL_ITEM":
			return (Object.assign(
				{},
				state,
				{[clothing]:[]}))
		default:
		  return state
	}
};

export default reducer