import React from 'react';

const ItemCount = React.createClass({
	display(){
		return this.props.Store.shoppingCart.map((element,index)=>(<li key={index} >{element.item + ": " + element.count}</li>));
	},
	render(){
		return(
			<div>
				<h1>Items count:</h1>
				<ul className="dontShowli">
					{this.display()}
				</ul>
			</div>
			)
	}
})

export default ItemCount;