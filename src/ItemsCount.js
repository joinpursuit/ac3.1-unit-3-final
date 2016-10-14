import React from 'react';
import store from './store.js';

const ItemsCount = React.createClass ({
 render: function(){
 	return (
 		<div>
 		  Items Count:
		    {store.getState().map((val, indx) => <ul><li key={indx}>{indx+1}</li></ul>)} 
	    </div>
 	 )
  }
})

 export default ItemsCount;

// 'Items Count' section that shows the current count of the number of each item that the user has added to 

