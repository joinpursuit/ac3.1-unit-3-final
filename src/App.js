import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/store'


//middlewares
import AddItemsContainer from './middlewares/middlewares'

ReactDOM.render(
  <Provider store={store}>
    <AddItemsContainer/>
  </Provider>,
  document.getElementById('root')
);

 //<IndexRoute component={}/>
