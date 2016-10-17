import React from 'react'
import store from '../store/store'

const ADD_ITEM = 'ADD_ITEM'

const addItem = (item) => (
  {
    type: ADD_ITEM, 
    item
  }
)

const AddItems = (props) => (
  <div>
  <h1>Add To Items</h1>
  {
    props.buttonItems.map((buttonItem, i) => (
      <button onClick={store.dispatch.bind(this, addItem(buttonItem))} key={i} >{buttonItem}</button>
    ))
  }
  </div>
)


export default AddItems