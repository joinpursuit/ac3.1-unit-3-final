import React from 'react';
import {Component} from 'react';

import store from './store.js';
import {addShirt, addShoes, addHat, addSunglasses} from './actions.js';


var Cart = (props) => (
	<div>
	{props.items.map(function(item, idx){
		return (<li key={idx}> {item}</li>)
	})}
	
	<br/>
	<h1> Add an item </h1>
	<button onClick={store.dispatch.bind(this, addShirt())}> Shirt </button>
	<button onClick={store.dispatch.bind(this, addShoes())}> Shoes </button>
	<button onClick={store.dispatch.bind(this, addHat())}> Hat </button>
	<button onClick={store.dispatch.bind(this, addSunglasses())}> Sunglasses</button>
    </div>
    )

export default Cart
