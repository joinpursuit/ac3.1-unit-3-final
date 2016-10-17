import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';
import AddAnItem from './components/AddAnItem';
import RemoveAnItem from './components/RemoveAnItem';
import ItemCount from './components/ItemCount';
import YourItem from './components/YourItem';


var App = React.createClass({
  render: function() {
    return (
      <div>
      	<AddAnItem Store={this.props.Store}/>
      	<RemoveAnItem Store={this.props.Store}/>
      	<ItemCount Store={this.props.Store.getState()}/>
        <YourItem Store={this.props.Store.getState()}/>
      </div>
    )
  }
})

//question to ask why does yourItem not have direct access to the parent elements props? it must be passed to yourItem or other child element as a prop??

const render = () => ReactDOM.render(
  <App Store={Store}/>,
  document.getElementById('root')
);

render();
Store.subscribe(render);
