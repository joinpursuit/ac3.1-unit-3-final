import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import AddButtons from './addButtons';
import RemoveButtons from './removeButtons'
import ItemList from './itemList';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ItemList />
        <AddButtons />
        <RemoveButtons />
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
