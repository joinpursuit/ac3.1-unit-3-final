import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import Buttons from './components/Buttons.js';
import Cart from './components/Cart.js';
import {removeShirt} from './actions/actions.js';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Buttons />
        <Cart />

        <h1>Remove Items:</h1>
        <button onClick={store.dispatch.bind(this, removeShirt())}>Shirt</button>
        <button>Shoes</button>
        <button>Hat</button>
        <button>Sunglasses</button>
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
