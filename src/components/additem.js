import React from 'react';
import action from '../actions/actions'
import store from "../store/store"



export const Additem = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Add an item:</h1>
				<button onClick={store.dispatch.bind(this, action.addShoes())}>Shirt</button>
				<button onClick={store.dispatch.bind(this, action.addHat())}>Shoes</button>
				<button onClick={store.dispatch.bind(this, action.addSunglasses())}>Hat</button>
				<button onClick={store.dispatch.bind(this, action.addShirt())}>Sunglasses</button>
				
			</div>
		)
	}
});