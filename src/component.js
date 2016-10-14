//Component
import React from 'react';
import store from './App.js';
import {addShirt, addShoes, addHat, addSunglasses} from './actions.js'

const Cart = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Add</h1>
				<br/>
				<button onClick = {store.dispatch.bind(this,addShirt())}>Add Shirt</button>
				<button onClick = {store.dispatch.bind(this,addShoes())}>Add Shoes</button>
				<button onClick = {store.dispatch.bind(this,addHat())}>Add Hat</button>
				<button onClick = {store.dispatch.bind(this,addSunglasses())}>Add Sunglasses</button>

				<h1>Take Out</h1>
				<br/>
				<button onClick = {store.dispatch.bind(this,delShirt())}>delShirt</button>
				<button onClick = {store.dispatch.bind(this,delShoes())}>delShoes</button>
				<button onClick = {store.dispatch.bind(this,delHat())}>delHat</button>
				<button onClick = {store.dispatch.bind(this,delSunglasses())}>delSunglasses</button>
				<ul>
					{store.getState()}.map(function(element,idx){
						return (
							<li key ={idx}>{element}</li>
							<br/>
							)
					})
				</ul>
			</div>
		)
	}
})

export default Cart;