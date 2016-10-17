import React from 'react';
import {addOrRemove, REMOVE_ITEM, REMOVE_ALL} from '../actions/action';

const RemoveAnItem = React.createClass({
	displayButtons(){
		return this.props.Store.getState().shoppingCart.map((element, index)=>(<button onClick={this.props.Store.dispatch.bind(this, addOrRemove(REMOVE_ITEM, element.item, element.count))} key={index}>{"Remove " + element.item}</button>));
	},
	// just for fun added a functions where buttons will only display if an item of its type is added to cart also comes with a remove all button
	// just add "element.count === 0 ? null : " before button in displayButtons function above and change {this.displayButtons..etc} in render function below to {displayHelper()}
	displayHelper(){
		var output = this.displayButtons()
		for(var i=0; i < output.length; i++){
			if(output[i]){
				return output.concat(<button onClick={this.props.Store.dispatch.bind(this, addOrRemove(REMOVE_ALL))} key="a" >Remove All</button>)
			}
		}
	},
	render(){
		return(
			<div>
				<h1>Remove Items: </h1>
				{this.displayButtons().concat(<button onClick={this.props.Store.dispatch.bind(this, addOrRemove(REMOVE_ALL))} key="a" >Remove All</button>)}
				
			</div>
		)
	}
})

export default RemoveAnItem;