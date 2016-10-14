import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  ClothContainer from'./component/cloths_containers'
import Store from './store';

const App= ()=> (
	<Provider store= {Store}>
		
		<ClothContainer />
	</Provider>
)
// var App = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//       </div>
//     )
//   }
// })

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);


// document.addEventListener("DOMContentLoaded", ()=> {
// 	ReactDOM.render(
// 		<App />,
// 		document.getElementById('root')
// 	);
// });
