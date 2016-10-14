import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import AddItem from './addItem.js';
import ItemList from './itemList.js';
import ItemCount from './itemCount.js';


var App = React.createClass({
  render: function() {
  	console.log(store.getState())
    return (
    	<div>
	      	<AddItem/>
	        <ItemList/>
	        <ItemCount/>
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