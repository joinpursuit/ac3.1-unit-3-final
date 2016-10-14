import React from 'react';
import store from '../store/store.jsx';

const ItemList = React.createClass({
  render: function() {
	  	return (
	  		<div>
	        <h1>Your Items:</h1>
		        {store.getState().shirts.map(function(val, idx) {
		        	return <li key={idx}>{val}</li>
		        })}

		        {store.getState().shoes.map(function(val, idx) {
		        	return <li key={idx}>{val}</li>
		        })} 

		        {store.getState().hats.map(function(val, idx) {
		        	return <li key={idx}>{val}</li>
		        })}  

		        {store.getState().sunnies.map(function(val, idx) {
		        	return <li key={idx}>{val}</li>
		        })}
	        </div>
	  	)}
	 })

export default ItemList; 