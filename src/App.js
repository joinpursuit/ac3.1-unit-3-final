import React from 'react';
import ReactDOM from 'react-dom';
import AddItems from './components/addbuttons.jsx'
import RemoveItems from './components/removebuttons.jsx'
import store from './components/store.jsx'
import ItemsCounter from './components/itemscounter.jsx'
import CartList from './components/cartlist.jsx'

const App = () =>(
      <div>
        <h1>Unit 3 Final Assessment: Redux Store</h1>
        <AddItems />
        <RemoveItems />
		<ItemsCounter />
		<CartList />
      </div>
      )

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);