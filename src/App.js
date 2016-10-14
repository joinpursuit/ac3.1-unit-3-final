import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import {addShirt, addShoes, addHat, addSunglasses} from './actions.js';
import ShoppingContainer from './shopping_container.js';
import Cart from './cart.jsx';

var App = () => (
	<Provider store={store}>
	  <ShoppingContainer/>
	</Provider>  
	)
document.addEventListener('DOMContentLoaded',() => {
ReactDOM.render(
  <App />,
  document.getElementById('root'));

});