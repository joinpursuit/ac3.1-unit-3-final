import React from 'react';
import {Component} from 'react'
import store from '../store';
import { addShirt, addShoes, addHat, addSunglasses } from '../actions.js'

// var button1 = document.getElementById('shirt'), count = 0;
// button.onclick = function(){ ++count; };
// var button2 = document.getElementById('shoes'), count = 0;
// button.onclick = function(){ ++count; };
// var button3 = document.getElementById('hats'), count = 0;
// button.onclick = function(){ ++count; };
// var button4 = document.getElementById('sunglasses'), count = 0;
// button.onclick = function(){ ++count; };

const Items = (props1) => (
	<div>
		<button id="shirt" onClick={store.dispatch.bind(this, addShirt())}>Shirt</button>
		<button id="shoes" onClick={store.dispatch.bind(this, addShoes())}>Shoes</button>
		<button id="hats" onClick={store.dispatch.bind(this, addHat())}>Hat</button>
		<button id="sunglasses" onClick={store.dispatch.bind(this, addSunglasses())}>Sunglasses</button>
		<br />
		<h1>Your Items</h1>
		<ul>
			{props1.items.map(function (item,i) {
				return (<li key={i}>{item}</li>)
			})}
		</ul>

		<br />
		{/*<h1>Item Count</h1>
		<ul>
			<li>👕 - Shirts:</li>
			<li>👞 - Shoes:</li>
			<li>🎩 - Hats:</li>
			<li>🕶 - Sunglasses:</li>
		</ul>*/}		
	</div>	
) 

export default Items;