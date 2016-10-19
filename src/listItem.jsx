import React from 'react';

let ListItem = React.createClass({
	render: () => (
			<li>
				{this.props.item}
			</li>
		)
})

export default ListItem;