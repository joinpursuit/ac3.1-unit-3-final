import React from 'react';
import store from '../store/store.jsx';

const ItemCount = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Items Count:</h1>
        	<h3>Shirts: {store.getState().shirts.length}</h3>
        	<h3>Shoes: {store.getState().shoes.length}</h3>
        	<h3>Hats: {store.getState().hats.length}</h3>
        	<h3>Sunnies: {store.getState().sunnies.length}</h3>
      </div>
  )}
})

export default ItemCount;