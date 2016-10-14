import React from 'react';

const ItemCount = (props) => {
  var cart = props.store.getState().cart

  var itemCountArr = Object.keys(cart).map(item => {
    return <p key={item}>{item + ': ' + cart[item]}</p>
  })

  return (
    <div>
      <h2>Items Count</h2>
        {itemCountArr}
    </div>
  )

}

export default ItemCount;
