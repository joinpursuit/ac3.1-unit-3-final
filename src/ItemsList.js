import React from 'react';
import store from './store';

const ItemsList = () => (
 <div>
 	Your Items:
 	{store.getState().map((val, indx) => <ul><li key={indx}>{val}</li></ul>)}
 </div>
)

export default ItemsList;

//An 'Items List' that shows all of the items that the user has added to their cart. 

