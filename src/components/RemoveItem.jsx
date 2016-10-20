import React from 'react';
import store from'../store/store.js'
import { removeItem } from '../actions/actions.js'

const RemoveItem = () => (
	<div>
		<h2>Remove an item:</h2>

		<button onClick={ store.dispatch.bind( this, removeItem("Shirt") ) }>Shirt 👕</button>
		<button onClick={ store.dispatch.bind( this, removeItem("Shoes") ) }>Shoes 👞</button>
		<button onClick={ store.dispatch.bind( this, removeItem("Hat") ) }>Hat 🎓</button>
		<button onClick={ store.dispatch.bind( this, removeItem("Sunglasses") ) }>Sunglasses 👓</button>
	</div>
)

export default RemoveItem;

