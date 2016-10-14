import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store";
import Itemlist from "./components/itemlist";
import Itemcount from "./components/itemcount";
import Additem from "./components/additem";
import action from './actions/actions'




var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Itemlist />
      	<Additem />
      	<Itemcount />
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