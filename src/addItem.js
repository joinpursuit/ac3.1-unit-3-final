import React from 'react';
import store from './store.js'
import {addShirt,addShoe, addHat, addSunglasses} from './action'

var AddItem = React.createClass({
	render(){
		return (
			<div>
				<h1>Add an Item:</h1>
				<button onClick={store.dispatch.bind(this,addShirt())}>Shirts</button>
				<button onClick={store.dispatch.bind(this,addShoe())}>Shoes</button>
				<button onClick={store.dispatch.bind(this,addHat())}>Hats</button>
				<button onClick={store.dispatch.bind(this,addSunglasses())}>Sunglasses</button>

			</div>
			)
	}
})

export default AddItem;