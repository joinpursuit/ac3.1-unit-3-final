import React from 'react';
import store from './store.js'

	
var ItemList = React.createClass({
	render(){
		return (
		<div>
	 		<h1>Your Items:</h1>
	 		{store.getState().itemList.map((item,i)=> <li key={i}> {item}</li>)}
				
		</div>
			)
	}
})

export default ItemList;
