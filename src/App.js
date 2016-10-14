import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js'
import {addTodoItem, removeTodoItem} from './actions/action.js'


var App = React.createClass({
  render: function() {

  	//Maps over todo items object. 
  	let todoItems = store.getState().todo.map(function(todo, idx){
  		return (<li key={idx}>{todo}</li>)
  	})

  	//Declaring number count for each item. 
  	let shirtCount = store.getState().shirts
  	let shoeCount = store.getState().shoes
  	let hatCount = store.getState().hats
  	let sunglassCount = store.getState().sunglasses

    return (
      <div>
		<h1>Shopping Cart</h1>
		
		<h2>Add an Item:</h2>
			<button onClick={store.dispatch.bind(this, addTodoItem("Shirts"))}>Shirts</button>
			<button onClick={store.dispatch.bind(this, addTodoItem("Shoes"))}>Shoes</button>
			<button onClick={store.dispatch.bind(this, addTodoItem("Hats"))}>Hat</button>
			<button onClick={store.dispatch.bind(this, addTodoItem("Sunglasses"))}>Sunglasses</button>   

		<h2>Remove Items:</h2>
			<button onClick={store.dispatch.bind(this, removeTodoItem("Shirts"))}>Shirts</button>
			<button onClick={store.dispatch.bind(this, removeTodoItem("Shoes"))}>Shoes</button>
			<button onClick={store.dispatch.bind(this, removeTodoItem("Hats"))}>Hat</button>
			<button onClick={store.dispatch.bind(this, removeTodoItem("Sunglasses"))}>Sunglasses</button>

		<h2>Items Count:</h2>
			<h3>Shirts:</h3> 
				{shirtCount}
			
			<h3>Shoes:</h3>
				{shoeCount}
			
			<h3>Hats:</h3>
				{hatCount}
			
			<h3>Sunglasses:</h3>
				{sunglassCount}

			<h2>Your Items:</h2>
				<ul>
					{todoItems}
				</ul>

      </div>
    )
  }
});


const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render()
store.subscribe(render)
