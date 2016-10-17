import React from 'react'

const ItemCount = (props) => {
  console.log(props)
  return (<div>
  <h1>Item Count</h1>
  <ul>
    {
      Object.keys(props.itemCount).map((type, i)=>(
        <li key={i}>{type.toUpperCase()} : {props.itemCount[type]}</li>
      ))
    }

  </ul>
  </div>)
}

export default ItemCount