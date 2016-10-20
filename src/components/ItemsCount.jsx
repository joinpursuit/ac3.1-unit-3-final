import React from 'react';
import store from'../store/store.js'
// import { addItem } from '../actions/actions.js'

const ItemsCount = () => (
	<div>
		<h2>Items Count:</h2>

		{store.getState().items}

	</div>
)

export default ItemsCount;

