import React from 'react';

const ItemList = (props) => {
  var cart = props.store.getState().cart;
  var itemListArr = [];
  var key = 0;

  Object.keys(cart).forEach((item) => {
    var setOfItems = Array(cart[item]).fill(item);

    setOfItems = setOfItems.map((itemLi) => <li key={key++}>{itemLi}</li>)

    itemListArr = itemListArr.concat(setOfItems);
  })

  return (
    <div>
      <h2>Your Items</h2>
      <ul>
        {itemListArr}
      </ul>
    </div>
  )

}

export default ItemList;
