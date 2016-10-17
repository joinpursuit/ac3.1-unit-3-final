import  { createStore } from 'redux';
import reducer from  '../reducer/reducer';


const Store = createStore(reducer, {shoppingCart:[
	{item:"Shirt", count:0},
	{item:"Shoes", count:0},
	{item:"Hats", count:0},
	{item:"Sunglasses", count:0},
	]},window.devToolsExtension ? window.devToolsExtension() : undefined);

export default Store;