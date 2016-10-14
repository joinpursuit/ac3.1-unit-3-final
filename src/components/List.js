import React from 'react';

// IMPORT STORE
import {store} from '../store/store.js';


// IMPORT ACTION CREATORS
import {addClothing} from '../actions/actions.js';
import {removeClothing} from '../actions/actions.js'

export const List = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Add Clothing</h1>
        <button onClick={store.dispatch.bind(this, addClothing('shirt'))}>Add shirt</button>
        <button onClick={store.dispatch.bind(this, addClothing('pants'))}>Add pants</button>
        <button onClick={store.dispatch.bind(this, addClothing('shoes'))}>Add shoes</button>
        <button onClick={store.dispatch.bind(this, addClothing('socks'))}>Add socks</button>
        <br/>

        <h1>Remove Clothing</h1>
        <button onClick={store.dispatch.bind(this, removeClothing('shirt'))}>Remove shirt</button>
        <button onClick={store.dispatch.bind(this, removeClothing('pants'))}>Remove pants</button>
        <button onClick={store.dispatch.bind(this, removeClothing('shoes'))}>Remove shoes</button>
        <button onClick={store.dispatch.bind(this, removeClothing('socks'))}>Remove socks</button>
        <br/>

        <h1>Clothing Items:</h1>      
        <h2>{store.getState().shirts.length} Shirt</h2>
          <ul>
            {store.getState().shirts.map(function(val, idx) {
              return <li key={'shirt_' + idx}>{val}</li>
            })}
          </ul>
        
        <h2>{store.getState().pants.length} Pants</h2>
          <ul>
            {store.getState().pants.map(function(val, idx) {
              return <li key={'pants_' + idx}>{val}</li>
            })}
          </ul>
        
        <h2>{store.getState().shoes.length} Shoes</h2>
          <ul>
            {store.getState().shoes.map(function(val, idx) {
              return <li key={'shoes_' + idx}>{val}</li>
            })}
          </ul>
        
        <h2>{store.getState().socks.length} Socks</h2>
          <ul>
            {store.getState().socks.map(function(val, idx) {
              return <li key={'socks_' + idx}>{val}</li>
            })}
          </ul>
      </div>
    )
  }
})

