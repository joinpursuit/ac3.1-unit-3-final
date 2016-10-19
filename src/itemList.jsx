import React from 'react';
import store from './store.js';

let ItemList = React.createClass({
	// generateList: () => {
	// 	var store = store.getState();
	// 	var list = [];
	// 	for (let i = 0; i < store.shirts; i ++) {
	// 		list.push(<li>Shirt</li>)
	// 	}
	// 	for (let i = 0; i < store.shoes; i ++) {
	// 		list.push(<li>Shoes</li>)
	// 	}
	// 	for (let i = 0; i < store.hats; i ++) {
	// 		list.push(<li>Hat</li>)
	// 	}
	// 	for (let i = 0; i < store.sunGlasses; i ++) {
	// 		list.push(<li>Sunglasses</li>)
	// 	}
	// 	return list;
	// },
	render: () => (
			<div>
				<div>
					<h3>Shirts: {store.getState().shirts.toString()}</h3>
					<h3>Shoes: {store.getState().shoes.toString()}</h3>
					<h3>Hats: {store.getState().hats.toString()}</h3>
					<h3>Sunglasses: {store.getState().sunGlasses.toString()}</h3>
				</div>
				<div>
					<ul>
						
					</ul>
				</div>
			</div>
		)
})

export default ItemList;