import React from 'react';
import store from '../store/store.jsx';
import {clearShirts, clearShoes, clearHats, clearSunnies} from '../actions/actions.js';

const RemoveItems = React.createClass({
  render: function() {
	  	return (
	  		<div>
		        <h1>Remove Items:</h1>
		      		<button onClick={store.dispatch.bind(this, clearShirts())}>clear 👕</button>
		         	<button onClick={store.dispatch.bind(this, clearShoes())}>clear 👠</button>
		        	<button onClick={store.dispatch.bind(this, clearHats())}>clear 🎩</button>
		        	<button onClick={store.dispatch.bind(this, clearSunnies())}>clear 🕶</button>
	        </div>
	  	)}
	 })

export default RemoveItems; 