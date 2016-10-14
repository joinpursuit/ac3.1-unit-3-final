import React from 'react';
import {addItem} from '../actions/actions.js';


const AddItem = (props) => (
  <div>
    <h2>Add an Item:</h2>
    <div>
      <button onClick={props.store.dispatch.bind(this, addItem('Shirt'))}>Shirt</button>
      <button onClick={props.store.dispatch.bind(this, addItem('Shoes'))}>Shoes</button>
      <button onClick={props.store.dispatch.bind(this, addItem('Hat'))}>Hat</button>
      <button onClick={props.store.dispatch.bind(this, addItem('Sunglasses'))}>Sunglasses</button>
    </div>
  </div>
)

export default AddItem;
