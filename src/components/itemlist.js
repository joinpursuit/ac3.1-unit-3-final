import React from 'react';
import store from "../store/store";


const Itemlist = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Your items:</h1>
				<ul>{store.getState().items}Array that contains LI tags</ul>
			</div>
		)
	}
});

export default Itemlist;