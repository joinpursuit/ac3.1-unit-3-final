// import store from '../store/store.js';

const counterReducer = (state = 0,action) => {
	switch(action.type){
		case'COUNT_ITEMS':{
			return state + action.amount;
		}
		default:
			return state;
	}	
}

const mainReducer = (state =[],action) =>{
	switch(action.type){
		case'ADD_ITEMS':{
			return state.concat(action.item);
		}
		default:
			return state;
	}
}


export default counterReducer;