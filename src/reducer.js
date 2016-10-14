import { addShirt, addShoe, addHat, addSunglasses} from './action';


 // itemCount:Object.assign({},Oldstate.itemCount,{shirt:action.count++}
var _defaultState={
itemList:[],
itemCount:{shirt: 0, shoe: 0, hat: 0, sunglasses :0}
}
var reducer = (Oldstate=_defaultState, action)=>{
				// {items:[...Oldstate.items,{shirt:action.shirt,count:OldState.count+1}]}
	switch(action.type){
		case 'SHIRT':
			return {itemList:Oldstate.itemList.concat(action.shirts),
					itemCount:Object.assign({},Oldstate.itemCount,{shirt:Oldstate.itemCount.shirt+action.shirtc})
				}
			
		case 'ADD_SHOE':
			return {itemList:Oldstate.itemList.concat(action.shoe),
					itemCount:Object.assign({},Oldstate.itemCount,{shoe:Oldstate.itemCount.shoe+action.shoec})
				}
		
		case 'ADD_HAT':
			return {itemList:Oldstate.itemList.concat(action.hat),
				itemCount:Object.assign({},Oldstate.itemCount,{hat:Oldstate.itemCount.hat+action.hatc})
				}

		case 'ADD_SUNGLASSES':
			return {itemList:Oldstate.itemList.concat(action.sunglasses),
				itemCount:Object.assign({},Oldstate.itemCount,{sunglasses:Oldstate.itemCount.sunglasses+action.sunglassesc})
				}

		default:
			return Oldstate;

		}
	}

export default reducer;