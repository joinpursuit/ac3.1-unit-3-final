import React from "react";

import store from "../store/store"
import {remShirt, remShoes, remHat, remSunglasses} from "../actions/action";

const RemoveItem = () => (
	<div>
		<h1>Remove Items:</h1>
			<button onClick={store.dispatch.bind(this,remShirt())}>Shirt</button>
			
			<button onClick={store.dispatch.bind(this,remShoes())}>Shoes</button>

			<button onClick={store.dispatch.bind(this,remHat())}>Hat</button>

			<button onClick={store.dispatch.bind(this,remSunglasses())}>Sunglasses</button>
	</div>
)
export default RemoveItem;