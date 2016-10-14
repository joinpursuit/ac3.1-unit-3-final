import React from 'react';
import {addShirt, addShoes, addHat, addSunglasses} from '../actions/actions.js';
import store from '../store/store.js';

const Buttons = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Add An Item</h1>
		        <button onClick={store.dispatch.bind(this, addShirt())}>Shirt</button>
		        <button onClick={store.dispatch.bind(this,addShoes())}>Shoes</button>
		        <button onClick={store.dispatch.bind(this,addHat())}>Hat</button>
		        <button onClick={store.dispatch.bind(this,addSunglasses())}>Sunglasses</button>
			</div>
		)
	}
})

export default Buttons;