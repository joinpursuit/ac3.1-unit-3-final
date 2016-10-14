import React from "react";
import {addHat,addSunglasses,addShirt,addShoes,addNum} from "../action/action.js"
import store from "../store/store.js"


var Counter = () => (
			<div>
				<h1 className="items">Your Items:</h1>
					<br />
				
				<ul>
				{store.getState().item.map(function(a,idx){
					return <li key={idx}>{a}</li>
				})}
				</ul>
					<br />

				<h1>Add an item:</h1>
					<br />

				<button onClick={store.dispatch.bind(this,addHat())}>HAT</button>
				<button onClick={store.dispatch.bind(this,addSunglasses())}>SUNGLASSES</button>
				<button onClick={store.dispatch.bind(this,addShoes())}>SHOES</button>
				<button onClick={store.dispatch.bind(this,addShirt())}>SHIRT</button>
					<br />

				<h1>Items count:</h1>
					<br />
					<p>Hats:0</p>
					<p>Sunglasses:0</p>
					<p>Shoes:0</p>
					<p>Shirts:0</p>

			</div>
			)
	


export default Counter;