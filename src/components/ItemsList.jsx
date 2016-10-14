import React from "react";


const ItemsList = (props) => (
	<div>
		<h1>Your Items</h1>
			<ul>
				{props.items.map( (apparel, idx) => (<li key={idx}> {apparel} </li>) )}
			</ul>		
	</div>
)


export default ItemsList; 