import React from 'react';
import {removeItem} from '../actions/actions.js';

var RemoveItem = (props) => (
  <div>
    <h2>Remove Item:</h2>
    <div>
      <button onClick={props.store.dispatch.bind(this, removeItem('Shirt'))}>Shirt</button>
      <button onClick={props.store.dispatch.bind(this, removeItem('Shoes'))}>Shoes</button>
      <button onClick={props.store.dispatch.bind(this, removeItem('Hat'))}>Hat</button>
      <button onClick={props.store.dispatch.bind(this, removeItem('Sunglasses'))}>Sunglasses</button>
    </div>
  </div>
)

export default RemoveItem;
