import React from 'react';
import store from "../store/store"


export const Itemcount = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Items count:</h1>
				<h2>Shirt: {store.getState().shirts}</h2>
				<h2>Shoes: {store.getState().shoes}</h2>
				<h2>Hats: {store.getState().hats}</h2>
				<h2>Sunglasses: {store.getState().sunglasses}</h2>
			</div>
		)
	}
});