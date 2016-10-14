import {addShirt, addHat, addKicks, addShades} from '../action/action';
import React from 'react';

const Counter = (props) => (
  <div>
    <h1>Add your swag</h1>
    <button className="add_items" onClick={props.store.dispatch.bind(this, addShirt())}>Shirt</button>
    <button className="add_items" onClick={props.store.dispatch.bind(this, addHat())}>Hat</button>
    <button className="add_items" onClick={props.store.dispatch.bind(this, addKicks())}>Kicks</button>
    <button className="add_items" onClick={props.store.dispatch.bind(this, addShades())}>Shades</button>
    <h1>Swag Count</h1>
    <h3>Shirt(s): {props.store.getState().count}</h3>
    <h3>Hat(s): {props.store.getState().count2}</h3>
    <h3>Kicks: {props.store.getState().count3}</h3>
    <h3>Shades: {props.store.getState().count4}</h3>
    <h1>Your swag bag</h1>
    {props.store.getState().shoppingBag}
  </div>

)

export default Counter;
