import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Remove from './remove/remove'
import Counter from './counter/counter';
import './App.css'

var App = (props) => (
  <div>
    <h1>Welcome to my Store!</h1>
    <Counter store={store} />
    <Remove />
  </div>

)

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
