import React from 'react';
import store from'../store/store.js'
import { addItem } from '../actions/actions.js'

const AddItem = () => (
	<div>
		<h2>Add an item:</h2>

		<button onClick={ store.dispatch.bind( this, addItem("👕") ) }>Shirt 👕</button>
		<button onClick={ store.dispatch.bind( this, addItem("👞") ) }>Shoes 👞</button>
		<button onClick={ store.dispatch.bind( this, addItem("🎓") ) }>Hat 🎓</button>
		<button onClick={ store.dispatch.bind( this, addItem("👓") ) }>Sunglasses 👓</button>

	</div>
)

export default AddItem;

