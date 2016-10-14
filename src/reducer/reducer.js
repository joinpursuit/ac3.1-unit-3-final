import {ADD_TODO, REMOVE_TODO} from '../actions/action.js'

//App State
const _defaultState = {
	todo: [],
	shirts: 0,
	shoes: 0,
	hats: 0,
	sunglasses: 0
};


const reducer = (oldState = _defaultState, action) => {

	switch (action.type){
		case 'ADD_TODO': 
			if(action.data === 'Shirts'){
				return Object.assign({}, oldState, {todo: [...oldState.todo, action.data]}, {shirts: oldState.shirts += 1})  
			
			} else if (action.data === 'Shoes'){
				return Object.assign({}, oldState, {todo: [...oldState.todo, action.data]}, {shoes: oldState.shoes += 1}) 
			
			} else if (action.data === 'Hats'){
				return Object.assign({}, oldState, {todo: [...oldState.todo, action.data]}, {hats: oldState.hats += 1}) 
			
			} else if (action.data === 'Sunglasses'){
				return Object.assign({}, oldState, {todo: [...oldState.todo, action.data]}, {sunglasses: oldState.sunglasses += 1}) 
			}

		break;
		case "REMOVE_TODO":

			//SHIRTS
			if(action.data === 'Shirts'){
				let arr = []
				oldState.todo.forEach(function(val, idx){
					if(val !== 'Shirts'){
						arr.push(val)
					}
				})
				return Object.assign( {}, oldState, {todo: arr}, {shirts: oldState.shirts = 0})  

			//SHOES
			} else if (action.data === 'Shoes'){
				
				let arr = []
				oldState.todo.forEach(function(val, idx){
					if(val !== 'Shoes'){
						arr.push(val)
					}
				})
				return Object.assign({}, oldState, {todo: arr}, {shoes: oldState.shoes = 0})

			//HATS
			} else if (action.data === 'Hats'){
				
				let arr = []
				oldState.todo.forEach(function(val, idx){
					if(val !== 'Hats'){
						arr.push(val)
					}
				})
				return Object.assign({}, oldState, {todo: arr}, {hats: oldState.hats = 0}) 

			//SUNGLASSES
			} else if (action.data === 'Sunglasses'){
				
				let arr = []
				oldState.todo.forEach(function(val, idx){
					if(val !== 'Sunglasses'){
						arr.push(val)
					}
				})
				return Object.assign({}, oldState, {todo: arr}, {sunglasses: oldState.sunglasses = 0}) 
			}

		break;
		default: 
			return oldState
	}
};

export default reducer;
