const  _defaultState = {CURRENT:0}


const reducer = (state= _defaultState,action) =>{
	switch(action.type) {
        case 'ADD':
           return Object.assign({},state,{CURRENT:state.CURRENT +1})

       default:
           return state
	}
}

export default reducer


