import React from 'react'
import store from './store.jsx'

const ItemsCounter = React.createClass({
	render: function(){
		return(
			<div>
			    <h2>Items count:</h2>
		        Shirt: {store.getState()["Shirt"].length}<br/>
		        Shoes: {store.getState()["Shoes"].length}<br/>
		        Hats: {store.getState()["Hat"].length}<br/>
		        Sunglasses: {store.getState()["Sunglasses"].length}<br/>
		    </div>
			)
	}
})

export default ItemsCounter