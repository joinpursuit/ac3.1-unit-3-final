// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import store from './store/store.js';
// REACT-REDUX
import { Provider } from 'react-redux';


// PRESENTATIONAL COMPONENTS
// import AddItem from './components/AddItem.jsx';
// import RemoveItem from './components/RemoveItem.jsx';
// import ItemsCount from './components/ItemsCount.jsx';
// import Cart from './components/Cart.jsx';

// CONTAINER COMPONENTS
import AddItemContainer from './components/AddItemContainer.js';
import RemoveItemContainer from './components/RemoveItemContainer.js';
import ItemsCountContainer from './components/ItemsCountContainer.js';
import CartContainer from './components/CartContainer.js';

// ACTIONS
// import { addItem, removeItem, countItem, showCart } from './actions/actions.js'

const App = () => (
	<div>
		<AddItemContainer />
		<RemoveItemContainer />
		<ItemsCountContainer />
		<CartContainer />

	</div>
)

ReactDOM.render(
	<Provider store={store}>
	  	<App />
	</Provider>,
	document.getElementById('root')
);
