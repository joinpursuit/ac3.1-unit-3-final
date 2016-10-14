import React from 'react'
import store from './store.jsx'
import {delButton} from './action.jsx'

const RemoveItems = React.createClass({
	render: function(){
		return (
			<div>
			    <h2>Remove items:</h2>
				{["Shirt", "Shoes", "Hat", "Sunglasses"].map(function(element,indx){
				return(
	  				<button key={indx} onClick={store.dispatch.bind(this, delButton(element))}>{element}</button>
	  				)
				}
			)}
	  		</div>
	  	)
	}
})

export default RemoveItems