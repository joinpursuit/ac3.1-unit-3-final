import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



const defaultState = {list: []}



const reducer = (state = defaultState,action) =>{
	switch(action.type){
		case 'ADD_ITEM':
			return(
				Object.assign({},state,{list:state.list.concat(action.data)})
				
			)
		case 'REMOVE_ITEM':
			return(
				Object.assign({},state,{list:[]})
			
			)
		default:
			return state
	}
}

const store = createStore(reducer);


const addShirt = () => {store.dispatch({
	type: 'ADD_ITEM',
	data: 'shirt',
});
console.log(store.getState())
}

const addShoes = () => store.dispatch({
	type: 'ADD_ITEM',
	data: "shoes "
})

const addHat = () => store.dispatch({
	type: 'ADD_ITEM',
	data: "hat"
})

const addGlasses = () => store.dispatch({
	type: 'ADD_ITEM',
	data: "glasses"
})

const remove = () => store.dispatch({
	type: 'REMOVE_ITEM',
	data: " "
})



const App = React.createClass({
	render: ()=>
		<div className="container">
		<div>
			<h1> REDUX SHOPPING LIST</h1>
			<h3> Your Items: </h3>

			<ul>
				{store.getState().list.map((element, index)=>
					<li key={index}> {element} </li>)
				}
			</ul>
			
			<h3> Add a Item: </h3>
			<Button />


			<h3> Items Count: </h3>
			{store.getState().list.length}



			

			
			

		</div>
		</div>
})


const Button = React.createClass({
	render: () =>
	<div>
		<button id="A" onClick={addShirt}>Shirts </button>
		<button id="B" onClick={addShoes}>Shoes</button>
		<button id="C" onClick={addHat}>Hat</button>
		<button id="D" onClick={addGlasses}>Sunglasses</button>
		<button id="E" onClick={remove}>Clear Items List </button>
		
	</div>
})




const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);


render();


store.subscribe(render);


