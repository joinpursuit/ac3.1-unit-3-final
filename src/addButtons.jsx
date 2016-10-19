import React from 'react';
import store from './store.js';
import actions from './actions.js';

let AddButtons = React.createClass({
	render: () => (
			<div>
				<button onClick={store.dispatch.bind(this, actions.addShirt())}>Add Shirt</button>
				<button onClick={store.dispatch.bind(this, actions.addShoes())}>Add Shoes</button>
				<button onClick={store.dispatch.bind(this, actions.addHat())}>Add Hat</button>
				<button onClick={store.dispatch.bind(this, actions.addSunglasses())}>Add Sunglasses</button>
			</div>
		)
})

export default AddButtons;