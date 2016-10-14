import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'




// Store //////
var defaultState = (
	{clothes: [], shirtCounter: 0, jeansCounter: 0, hatCounter:0}
)

var reducer =(state = defaultState, action) =>{
	switch(action.type){
		case ADD:
			return (
				{clothes:state.clothes.concat(action.clothes), jeansCounter: action.jeansCounter, hatCounter:action.hatCounter, shirtCounter: action.shirtCounter}	
			)
		default:
			return state
	}
}

var store = createStore(reducer)

var ADD = 'ADD'
var REMOVE = 'REMOVE'


// ACTIONS//////////////////////////

var shirt = () =>(

	{type:ADD, clothes: "GUCCI SHIRT" , shirtCounter: store.getState().shirtCounter + 1, jeansCounter:store.getState().jeansCounter, hatCounter:store.getState().hatCounter}	

)
var jeans = () =>(

	{type:ADD, clothes: "POLO JEANS" , shirtCounter:store.getState().shirtCounter , jeansCounter:store.getState().jeansCounter + 1, hatCounter:store.getState().hatCounter}	


)
var hat = () =>(

	{type:ADD, clothes: "TRU  RELIGION HAT" , shirtCounter:store.getState().shirtCounter, jeansCounter:store.getState().jeansCounter, hatCounter: store.getState().hatCounter + 1}	

)

var remove = () =>(

	{type:REMOVE, clothes: store.getState().clothes , shirtCounter:store.getState().shirtCounter, jeansCounter:store.getState().jeansCounter, hatCounter: store.getState().hatCounter + 1}	

)



window.store = store
window.shirt = shirt



// RENDER/////////


var shopping = (state) =>(
	{clothes: state.clothes, shirtCounter: state.shirtCounter, hatCounter:state.hatCounter, jeansCounter: state.jeansCounter}
)


	var title = {
		color: "red"

	}
var Display = (props) =>(

	<div>
		<h3>The Amount <br/> Of Shit <br/> You
			Bought</h3>
		<h1 style = {title}> SHIRTS: {props.shirtCounter} </h1>
		<h1 style={title}> HATS: {props.hatCounter} </h1>
		<h1 style = {title}> JEANS: {props.jeansCounter} </h1>
		<h1 style = {title}> TOTAL: {props.jeansCounter + props.hatCounter + props.shirtCounter} </h1>

			
		<center>
			<h1> Your List </h1>
		</center>



		<center>
			<ul>	
				{props.clothes.map(function(a, indx){
					return <center> <li style = {{listStyleType:"none" }}key ={indx} > {a} </li> </center>
				})}

			</ul>

		</center>


		<center>
			<h1> ADD ITEMS </h1>
		</center>



		<center>	
			<button onClick = {store.dispatch.bind(this, shirt())}> SHIRT</button>
			<button onClick = {store.dispatch.bind(this, jeans())}> JEANS</button>
			<button onClick = {store.dispatch.bind(this, hat())}> HAT</button>
			<button onClick = {store.dispatch.bind(this, remove())}> REMOVE ITEM</button>
		</center>

	</div>


)


// CONTAINER////////////////
var Checkout = connect(shopping)(Display)

var App = () =>(

<Provider store= {store}>
	<Checkout />
</Provider>
)


document.addEventListener('DOMContentLoaded', ()=>{
	ReactDOM.render(
<App/>,
document.getElementById('root')

	)

})






