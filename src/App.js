import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import AddItem from './components/AddItem.jsx';
import RemoveItem from './components/RemoveItem.jsx';
import ItemCount from './components/ItemCount.jsx';
import ItemList from './components/ItemList.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AddItem store={store} />
        <RemoveItem store={store} />
        <ItemCount store={store} />
        <ItemList store={store} />
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
