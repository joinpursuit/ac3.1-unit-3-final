

const defaultState = {
						shirt: [],
						shoes: [],
						hat: [],
						sunglasses: [],
						counter: 0
					 }
					 


const reducer = (oldState = defaultState , action) => {
	switch(action.type){

		case "INCREMENT_SHIRT":
	      return ({

	        shirt: [...oldState.shirt, action.item],

			shoes: [...oldState.shoes],

			hat: [...oldState.hat],

			sunglasses: [...oldState.sunglasses],

			counter: oldState.counter + 1
	      })


	      case "INCREMENT_SHOES":
	      return ({

	        shirt: [...oldState.shirt],

			shoes: [...oldState.shoes, action.item],

			hat: [...oldState.hat],
			
			sunglasses: [...oldState.sunglasses],

			counter: oldState.counter + 1
	      })


	      case "INCREMENT_HAT":
	      return ({

	        shirt: [...oldState.shirt],

			shoes: [...oldState.shoes],

			hat: [...oldState.hat, action.item],
			
			sunglasses: [...oldState.sunglasses],

			counter: oldState.counter + 1
	      })



	      case "INCREMENT_SUNGLASSES":
	      return ({

	        shirt: [...oldState.shirt],

			shoes: [...oldState.shoes],

			hat: [...oldState.hat],
			
			sunglasses: [...oldState.sunglasses,  action.item],

			counter: oldState.counter + 1
	      })


		default:
			return oldState;


	}
}



export default reducer;


