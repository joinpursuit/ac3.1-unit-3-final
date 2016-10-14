import React from 'react';
import store from '../store/store.js';

const Cart = React.createClass({
	shoppingList(){
	var list = store.getState().shoppingCart.map(function(val,indx){
					return <li>{val}</li>;
				});
	return list;
	},
	render(){
		return(
			<div>
				<h1>Your Items:</h1>
		        <ul>{this.shoppingList()}</ul>

		        <h1>Items Count</h1>
		        <p>Shirts: {store.getState().shirtCounter}</p>
		        <p>Shoes: {store.getState().shoesCounter}</p>
		        <p>Hat: {store.getState().hatCounter}</p>
		        <p>Sunglasses: {store.getState().glassCounter}</p>
					</div>
		)
	}
}) 

export default Cart;