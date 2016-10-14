import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { addShirt, addShoes, addHat, addSunglasses } from './actions.js';
import Items from './components/items.jsx'
import ItemContainer from './components/item_container'
import store from './store';

const App = () => (
	<Provider store={store}>
		<ItemContainer/>
	</Provider>	
) 


document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
	<App />,document.getElementById('root'))
});