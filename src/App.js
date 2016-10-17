import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/store'


//middlewares
import AddItemsContainer from './middlewares/addItemsContainer'
import ItemCountContainer from './middlewares/itemCountContainer'


ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddItemsContainer/>
      <ItemCountContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
);

