import React from 'react';
import store from '../store/store.jsx';
import {addShirts, addShoes, addHats, addSunnies} from '../actions/actions.js';

const AddItems = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Add an Item!</h1>
	        <button onClick={store.dispatch.bind(this, addShirts())}>add 👕</button>
	        <button onClick={store.dispatch.bind(this, addShoes())}>add 👠</button>
	        <button onClick={store.dispatch.bind(this, addHats())}>add 🎩</button>
	        <button onClick={store.dispatch.bind(this, addSunnies())}>add 🕶</button>
      </div>
  )}
})

export default AddItems;