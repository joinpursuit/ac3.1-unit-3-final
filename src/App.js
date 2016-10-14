import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {addShirt, addShoes, addHat, addSunglasses, removeShirt, removeShoes, removeHat, removeSunglasses} from './actions';

var App = React.createClass({
  render: function() {
    return (
      <div>
      		<p><b>Salina Fu | ID: 3129</b></p>
        	<h1>Simple Shopping Cart</h1>      	
        <div>
	        <h2>Add An Item:</h2>
	        	<button onClick={store.dispatch.bind(this, addShirt())}>Shirt</button>
	        	<button onClick={store.dispatch.bind(this, addShoes())}>Shoes</button>
	        	<button onClick={store.dispatch.bind(this, addHat())}>Hat</button>
	        	<button onClick={store.dispatch.bind(this, addSunglasses())}>Sunglasses</button>
	    </div>	
        <div>
	        <h2>Your Items:</h2>
	        	<ul>
	        		{store.getState().items}        		
	        	</ul>
        </div>
		<br />	
	    <div>
	        <h2>Items Count:</h2>
	        	<p><b>Total Items: {store.getState().items.length}</b></p>
	        	<p>Shirts: </p>
	        	<p>Shoes: </p>
	        	<p>Hats: </p>
	        	<p>Sunglasses: </p>
        </div>
		<div>
			<h2>Remove An Item:</h2>
				<button onClick={store.dispatch.bind(this, removeShirt())}>Shirt</button>
	        	<button onClick={store.dispatch.bind(this, removeShoes())}>Shoes</button>
	        	<button onClick={store.dispatch.bind(this, removeHat())}>Hat</button>
	        	<button onClick={store.dispatch.bind(this, removeSunglasses())}>Sunglasses</button>
		</div> 
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
