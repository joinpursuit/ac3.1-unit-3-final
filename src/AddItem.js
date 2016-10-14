import React from 'react';
import store from './store.js';
import {shirt,shoes,hat,sunglasses} from './actions.js';

const AddItems = React.createClass({
  render: function() {
    return (
      <div>
      Add an Item:
      <br/>
        {store.getState().map((val, indx) => <p key={indx}>{val}</p>)}
        <button onClick={store.dispatch.bind(this,shirt())}>shirt</button>
        <button onClick={store.dispatch.bind(this,shoes())}>shoes</button>
        <button onClick={store.dispatch.bind(this,hat())}>hat</button>
        <button onClick={store.dispatch.bind(this,sunglasses())}>sunglasses</button>
      </div>
    )
  }
})

export default AddItems;

//'Add an Item' section that has buttons to add different types of items. The user should be able to add a shirt, shoes, hat, or sunglasses. Each item should have its own button, and when a user clicks on the button, the item should be added to their list of items.