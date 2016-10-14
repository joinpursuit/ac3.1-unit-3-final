import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import store from "./store/store"

import ItemsListContainer from "./components/items_container"
import ItemsCountContainer from "./components/itemsCount_container"
import AddItem from "./components/AddItem"
import RemoveItem from "./components/RemoveItem"

const App = () => (
	<div>
    <AddItem />
    <RemoveItem />
    <ItemsCountContainer />
		<ItemsListContainer />
	</div>
)

render (
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
)