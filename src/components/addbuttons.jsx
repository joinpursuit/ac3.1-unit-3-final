import React from 'react'
import store from './store.jsx'
import {addButton} from './action.jsx'

const AddItems = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Add an item:</h2>
				{["Shirt", "Shoes", "Hat", "Sunglasses"].map(function(element,indx){
				return(
	  				<button key={indx} onClick={store.dispatch.bind(this, addButton(element))}>{element}</button>
	  				)
				}
			)}
	  		</div>
	  	)
	}
})

export default AddItems