import React from "react";

//I'm filtering through current array in our state looking for the relevant items
//I then return the length of the new array returned by .filter()
const ItemsCount = (props) => (
	<div>
		<h1>Items Count:</h1>
			<h3>Shirts:</h3> {props.items.filter(apparel => apparel === "👕" ? apparel : null).length}

			<h3>Shoes:</h3> {props.items.filter(apparel => apparel === "👠" ? apparel : null).length}

			<h3>Hats:</h3> {props.items.filter(apparel => apparel === "👒" ? apparel : null).length}

			<h3>Sunglasses:</h3> {props.items.filter(apparel => apparel === "🕶" ? apparel : null).length}
	</div>
)

export default ItemsCount;