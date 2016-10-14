import React from 'react';
import Store from './Store.js'
import {addShirt, addShoes, addHat, addSunglasses} from './Action.js'

const AddItem = (props) => (
		<div>
			<div>
			{Store.getState().shoes.map(function(item, idx) {
			    return <li key={idx}>{item}</li>
			 })}

			{Store.getState().hat.map(function(item, idx) {
			    return <li key={idx}>{item}</li>
			 })}

			{Store.getState().sunglasses.map(function(item, idx) {
			    return <li key={idx}>{item}</li>
			 })}

			{Store.getState().shirt.map(function(item, idx) {
			    return <li key={idx}>{item}</li>
			 })}




			 	<h1>counter</h1>
				<h2>{Store.getState().counter}</h2>
		
				
			</div>
			<button onClick={Store.dispatch.bind(this, addShoes())}>SHOES</button>
			<button onClick={Store.dispatch.bind(this, addHat())}>HAT</button>
			<button onClick={Store.dispatch.bind(this, addSunglasses())}>SUNGLASSES</button>
			<button onClick={Store.dispatch.bind(this, addShirt())}>SHIRT</button>
			<button onClick={Store.dispatch.bind(this, addSunglasses())}>SUNGLASSES</button>
		</div>
		
)

export default AddItem;