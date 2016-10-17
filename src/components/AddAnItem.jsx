import React from 'react';
import {addOrRemove, ADD_ITEM} from '../actions/action';

const AddAnItem = React.createClass({
	displayButtons(){
		return this.props.Store.getState().shoppingCart.map((element, index)=>(
			<button onClick={this.props.Store.dispatch.bind(this, addOrRemove(ADD_ITEM, element.item, +1))} key={index}>{"Add " + element.item}</button>));
	},
	render(){
		return(
			<div>
				<h1>Add Item:</h1>
				{this.displayButtons()}
			</div>
		)
	}
})

export default AddAnItem;