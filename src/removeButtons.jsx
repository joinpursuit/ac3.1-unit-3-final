import React from 'react';
import store from './store.js';
import actions from './actions.js';

let RemoveButtons = React.createClass({
	render: () => (
			<div>
				<button onClick={store.dispatch.bind(this, actions.removeShirt())}>Remove Shirt</button>
				<button onClick={store.dispatch.bind(this, actions.removeShoes())}>Remove Shoes</button>
				<button onClick={store.dispatch.bind(this, actions.removeHat())}>Remove Hat</button>
				<button onClick={store.dispatch.bind(this, actions.removeSunglasses())}>Remove Sunglasses</button>
			</div>
		)
})

export default RemoveButtons;