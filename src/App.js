import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import ItemsCount from './ItemsCount';
import AddItems from './AddItem';
import ItemsList from './ItemsList';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AddItems />
        <ItemsList />
        <ItemsCount />
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
