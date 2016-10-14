import React from 'react';
import store from './store.js'
import {addShirt,addShoe, addHat, addSunglasses} from './action'

var ItemCount = React.createClass({
	render(){
		return (
			<div>
				<h1>Item Count:</h1>
				<h4>Shirts:</h4><span>{store.getState().itemCount.shirt}</span><br/>
				<h4>Shoes:</h4><span>{store.getState().itemCount.shoe}</span><br/>
				<h4>Hats:</h4><span>{store.getState().itemCount.shoe}</span><br/>
				<h4>Sunglasses:</h4><span>{store.getState().itemCount.sunglasses}</span><br/>
			</div>
			)
	}
})

export default ItemCount;