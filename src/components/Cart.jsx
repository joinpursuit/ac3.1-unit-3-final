import React from 'react';
import store from'../store/store.js'
// import { addItem } from '../actions/actions.js'

const Cart = () => (
	<div>
		<h2>Cart:</h2>

		{store.getState().items}

	</div>
)

export default Cart;

