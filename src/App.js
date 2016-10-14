// IMPORT EVERYTHING
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import CSS from './App.css'

// CREATE THE STATE OBJECT // ----------------------------------------------------------------
const default_state = {
	items: [],
	shirtCount: 0,
	shoeCount: 0,
	hatCount: 0,
	sunglassesCount: 0
}

// -------------------------------------------------------------------------------------------
// -------------------- ACTION CREATORS ------------------------------------------------------
// -------------------------------------------------------------------------------------------

// ADD THE ITEM
const addItem = function(item) {
	return {type: 'ADD_ITEM', item: item}
	console.log('items')
}

// REMOVE THE ITEM (EXTRA CREDIT)
const removeItem = function(item) {
	return {type: 'REMOVE_ITEM', item: item}
}

// UPDATE THE COUNT OF ITEMS
const updateItemCount = function() {
	return {type: 'UPDATE_COUNT'}
}

// ------------------------------------------------------------------------------------------
// --------------------- REDUCER ------------------------------------------------------------
// ------------------------------------------------------------------------------------------

const reducer = (state = default_state, action) => {

	// THE REDUCER FOR ADDING THE ITEMS TO THE LIST
	if (action.type === 'ADD_ITEM') {
		return {...state, items: [...state.items, action.item]}

	// FOR REMOVING THE ITEMS FROM THE LIST
	}  else if (action.type === 'REMOVE_ITEM') {
		console.log(action.item)

		var indexToRemove = state.items.lastIndexOf(action.item);

		var newArr = state.items;

		if(indexToRemove !== -1) {
			newArr.splice(indexToRemove, 1)
		}

		return {...state, items: newArr}

	// KEEP TRACK OF THE NUMBER OF ITEMS FOR EACH CATEGORY
	} else if (action.type === 'UPDATE_COUNT') {

		// return {...state, shirtCount: state.shirtCount + 1, shoeCount: state.shoeCount + 1, hatCount: state.hatCount + 1, sunglassesCount: state.sunglassesCount + 1}	
		  return Object.assign({}, state.items, {
	        shirtCount: action.shirtCount
	      });
	}

	// OTHERWISE, JUST RETURN THE DEFAULT STATE
	else {
		return default_state
	}
}

// --------------------- CREATE THE STORE ----------------------------------------------------------------
const store = createStore(reducer, 0, window.devToolsExtension ? window.devToolsExtension() : undefined);
// -------------------------------------------------------------------------------------------------------


// THE PARENT FUNCTION -----------------------------------------------------------------------------------
var Parent= React.createClass({
  render: function() {

  	var itemArray = store.getState().items.map(function(thing, index) {
  		return <li key={index}>{thing}</li>
  	})

    return (
      <div>
        <center><h1>Add Items:</h1></center>

        <span>
        	<h3>Shirts:{" " + store.getState().shirtCount}</h3>
        	<h3>Shoes:{" " + store.getState().shoeCount}</h3>
        	<h3>Hats:{" " + store.getState().hatCount}</h3>
        	<h3>Sunglasses:{" " + store.getState().sunglassesCount}</h3>
        </span>

        <center>
        	<button id="shirts" className="myButton" onClick={store.dispatch.bind(this, addItem('Shirts'))}>Shirts</button>
        	<button className="myButton" onClick={store.dispatch.bind(this, addItem('Shoes'))}>Shoes</button>
        	<button className="myButton" onClick={store.dispatch.bind(this, addItem('Hats'))}>Hats</button>
        	<button className="myButton" onClick={store.dispatch.bind(this, addItem('Sunglasses'))}>Sunglasses</button>
       		<br />
       		<button className="myButtonRemove" onClick={store.dispatch.bind(this, removeItem('Shirts'))}>Remove Shirt</button>
       		<button className="myButtonRemove" onClick={store.dispatch.bind(this, removeItem('Shoes'))}>Remove Shoe</button>
       		<button className="myButtonRemove" onClick={store.dispatch.bind(this, removeItem('Hats'))}>Remove Hat</button>
       		<button className="myButtonRemove" onClick={store.dispatch.bind(this, removeItem('Sunglasses'))}>Remove Sunglass</button>
        </center>

        <center>
        	<ul>
        		<li><h4>{itemArray}</h4></li>
        	</ul>
        </center>


      </div>
    )
  }
})

// THIS IS WHERE WE WILL RENDER EVERYTHING ------------------------------------------------------------------------------------
const render = function() {ReactDOM.render(
  <Parent />,
  document.getElementById('root')
)};

render();
store.subscribe(render)