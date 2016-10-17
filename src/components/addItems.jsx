import React from 'react'
import store from '../store/store'

const addItem = (items) => (
  {
    type: 'ADD_ITEM', 
    items,
  }
)

const AddItems = (props) => {
  return (<div>
  <h1>Add To Items</h1>
  {
    props.buttonItems.map((buttonItem, i) => (
      <button onClick={store.dispatch.bind(this, addItem(buttonItem))} key={i} >{buttonItem.toUpperCase()}</button>
    ))
  }
  <ul>
    {
      props.items.map((item, i)=>(
        <li key={i}>{item}</li>
      ))
    }

  </ul>

  </div>)
}


export default AddItems