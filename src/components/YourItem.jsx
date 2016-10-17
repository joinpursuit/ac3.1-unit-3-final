import React from 'react';

const YourItem = React.createClass({
	display(item, amount){
		var output=[]
		for (var i = 0; i < amount; i++) {
			output.push(<li>{item}</li>)
		}
		return output
	},
	displayHelper(){
		return this.props.Store.shoppingCart.map((element,index)=>(this.display(element.item, element.count)));
	},
	render(){
		return(
			<div>
				<h1>Your Item</h1>
				<ul>
					{this.displayHelper()}
				</ul>
			</div>
			)
	}
})

export default YourItem;