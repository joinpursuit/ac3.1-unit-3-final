import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import CSS from './index.css'

const ADD_SHIRT = "ADD_SHIRT"
const ADD_SHOE = "ADD_SHOE"

const _defaultState = {
	cart: []
} 

const buyPinkShirt = (amount) => (
	{type: ADD_SHIRT, amount: amount, item: '👚'}
)
const buyGreenShirt = (amount) => (
	{type: ADD_SHIRT, amount: amount, item: '👗'}
)
const buyKittenHeel = (amount) => (
	{type: ADD_SHOE, amount: amount, item: '👡'}
)
const buyRedShoe = (amount) => (
	{type: ADD_SHOE, amount: amount, item: '👠'}
)
const buyBoot = (amount) => (
	{type: ADD_SHOE, amount: amount, item: '👢'}
)

const reducer = (oldState = _defaultState, action) => {
	switch(action.type) {
		case ADD_SHIRT:
			return ({
				cart: [...oldState.cart, action.item]
			})
		case ADD_SHOE:
			return ({
				cart: [...oldState.cart, action.item]
			})
		default:
			return oldState
	}
}


const store = createStore(reducer)

const mapStoreToProps = store => (
	{cart: store.cart}
)

var Cart = (props) => (
	<div>
		<h1>Clothes N Stuff</h1>
		<h4>Add Item:</h4>
    {props.cart.map(function(cart, idx) {
      return (<span key={idx}>{cart}</span>)
    })}
    <br />
    <button onClick={store.dispatch.bind(this, buyPinkShirt(1))}>Buy Pink Shirt</button> 
    <button onClick={store.dispatch.bind(this, buyGreenShirt(1))}>Buy Green Dress</button>
    <button onClick={store.dispatch.bind(this, buyKittenHeel(1))}>Buy Kitten Heel</button>
    <button onClick={store.dispatch.bind(this, buyBoot(1))}>Buy Boot</button>
    <button onClick={store.dispatch.bind(this, buyRedShoe(1))}>Buy Red Shoe</button>
    <h4>Items Count:</h4>
	<ul>
		<li>Pink Shirt:</li>
		<li>Green Shirt:</li>
		<li>Kitten Heel:</li>
		<li>Boot:</li>
		<li>Red Heel:</li>
	</ul>
  </div>
)

const ShoppingCart = connect(mapStoreToProps)(Cart)

var App = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={ShoppingCart}/>
		</Router>
	</Provider>
)

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});