import {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL} from '../actions/action';


const reducer = (state , action) => {
    switch (action.type) {
        case ADD_ITEM:
            var obj = Object.assign({}, state);
            obj.shoppingCart.forEach(element=>{
                if(element.item === action.item){
                    element.count += action.incrementDecrement
                }
            });
            return  obj;
        case REMOVE_ITEM:
            var obj = Object.assign({}, state);
            obj.shoppingCart.forEach(element=>{
                if(element.item === action.item){
                    element.count -= action.incrementDecrement
                }
            });
            return  obj;
        case REMOVE_ALL:
            return {shoppingCart:[
                        {item:"Shirt", count:0},
                        {item:"Shoes", count:0},
                        {item:"Hats", count:0},
                        {item:"Sunglasses", count:0},
                    ]}
        default:
            return state;
    }
}

export default reducer;
