import React from 'react'
import store from './store.jsx'

const CartList = React.createClass({
	render: function(){
		return(
			<div>
		        <h2>Your items:</h2>
		        {store.getState().Shirt.map((ele,idx)=> <li key={idx}>{ele}</li>)}
		        {store.getState().Shoes.map((ele,idx)=> <li key={idx}>{ele}</li>)} 
		        {store.getState().Hat.map((ele,idx)=> <li key={idx}>{ele}</li>)} 
		        {store.getState().Sunglasses.map((ele,idx)=> <li key={idx}>{ele}</li>)}  
		    </div>
			)
	}
})

export default CartList