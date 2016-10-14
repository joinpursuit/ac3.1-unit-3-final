import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// IMPORT STORE
import {store} from './store/store.js';

// IMPORT CONTAINERS
import {ListContainer} from './components/listContainer.js';

// PROVIDER LINKS REACT TO REDUX
const App = () => (
  <Provider store={store}>
    <ListContainer/>
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
});

