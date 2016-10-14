import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Cart from './component.js'

const store = createStore(reducer)

const App = React.createClass({
  render: function() {
    return (
      <div>
       <Cart/>
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