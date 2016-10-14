import React from 'react';
import ReactDOM from 'react-dom';
import {addShirt, addPants, addHat, addSunglasses} from './actions.js'
import {removeShirt, removePants, removeHat, removeSunglasses} from './actions.js'
import store from './store.js'

const Cart = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Add an Item:</h1>
        <h1>{store.getState()}</h1>
          <button onClick ={store.dispatch.bind(this, addShirt('Shirt'))}>Shirt</button>
          <button onClick ={store.dispatch.bind(this, addPants('Pants'))}>Pants</button>
          <button onClick ={store.dispatch.bind(this, addHat('Hat'))}>Hat</button>
          <button onClick ={store.dispatch.bind(this, addSunglasses('Sunglasses'))}>Sunglasses</button>

        <h1>Remove Items:</h1>
          <button onClick ={store.dispatch.bind(this, removeShirt('Shirt'))}>Shirt</button>
          <button onClick ={store.dispatch.bind(this, removePants('Pants'))}>Pants</button>
          <button onClick ={store.dispatch.bind(this, removeHat('Hat'))}>Hat</button>
          <button onClick ={store.dispatch.bind(this, removeSunglasses('Sunglasses'))}>Sunglasses</button>

      </div>
    )
  }
})

export default Cart;
