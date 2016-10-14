import React from "react";

import store from "../store/store"
import {addShirt, addShoes, addHat, addSunglasses} from "../actions/action";

const AddItem = () => (
	<div>
		<h1>Add Items!</h1>
			<button onClick={store.dispatch.bind(this,addShirt())}>Shirt</button>

			<button onClick={store.dispatch.bind(this,addShoes())}>Shoes</button>

			<button onClick={store.dispatch.bind(this,addHat())}>Hat</button>
			
			<button onClick={store.dispatch.bind(this,addSunglasses())}>Sunglasses</button>
	</div>
)
export default AddItem;