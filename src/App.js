import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Cart from './components.js';
import store from './store.js';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Cart />
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
