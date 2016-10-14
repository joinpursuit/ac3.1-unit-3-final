import React from 'react';
import {countItems,addItems} from '../actions/actions.js';
import store from '../store/store.js';


const Counter = React.createClass({
	render:function(){
		return (
		<div>
		<h1> ADDED ITEMS : </h1>
			<button onClick={store.dispatch.bind(this,countItems(1))}>Shirts</button>
			<button onClick={store.dispatch.bind(this,countItems(1))}>Shoes</button>
			<button onClick={store.dispatch.bind(this,countItems(1))}>Hats</button>
			<button onClick={store.dispatch.bind(this,countItems(1))}>Sunglasses</button>



		<h1> ITEMS COUNT:</h1> 
			<h3>Shirts:{store.getState()}</h3>
			<h3>Shoes:{store.getState()}</h3>
			<h3>Hats:{store.getState()}</h3>
			<h3>Sunglasses:{store.getState()}</h3>
			
		<h1> YOUR SHOPPING LIST! </h1>
			<li>Shirts</li>
			<li>Shoes</li>
			<li>Hats</li>
			<li>Sunglasses</li>

		</div>

		)
	}
})
export default Counter;