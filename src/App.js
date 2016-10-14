import React from 'react';
import ReactDOM from 'react-dom';
import Wardrobe from './clothes.jsx'
import Store from './store'

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Clothing Store</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <Wardrobe />,
  document.getElementById('root')
);
