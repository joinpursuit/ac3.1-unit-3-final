import React from 'react';
import ReactDOM from 'react-dom';

import AddItem from './AddItem.js';
import Store from './Store.js'

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<h1>Welcome to my Store</h1>
      	<h2>ADD AN ITEM</h2>
      	<h3>LIST ITEM</h3>
      	<AddItem />
      </div>
    )
  }
})



// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
Store.subscribe(render);