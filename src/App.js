import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.jsx';
import ItemCount from './components/ItemCount.js';
import ItemList from './components/ItemList.js';
import RemoveItems from './components/RemoveItems.js';
import AddItems from './components/AddItems.js';

const render = () => ReactDOM.render(
	<div>
		<AddItems />
		<RemoveItems />
  		<ItemCount />
  		<ItemList />
  	</div>,
  document.getElementById('root')
);

render();
store.subscribe(render);