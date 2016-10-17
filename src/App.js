import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import reducer from './reducer/reducer';
import {ADD} from './action/action'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Plain Clothing: try us on for size 😏!</h1>
        <h2>Our current inventory: </h2>
         <ul>
            <li>
            Shirt
            </li>
            <li>
            Shoes
            </li>
            <li>
            Hat
            </li>
            <li>
            Sunglasses
            </li>
        </ul>
         <h1> Add to cart</h1>
         <button onClick={store.dispatch.bind(this,ADD())}>👕</button>
         <button onClick={store.dispatch.bind(this,ADD())}>👞</button>
         <button onClick={store.dispatch.bind(this,ADD())}>🎩</button>
         <button onClick={store.dispatch.bind(this,ADD())}>🕶</button>
        <h1>Your current list:</h1>
        <ul>
            <li>
            Shirt: {store.getState().CURRENT}
            </li>
            <li>
            Shoes: {store.getState().CURRENT}
            </li>
            <li>
            Hat:   {store.getState().CURRENT}
            </li>
            <li>
            Sunglaases: {store.getState().CURRENT}
            </li>
        </ul>


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
