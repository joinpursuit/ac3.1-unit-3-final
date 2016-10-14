import React from 'react';
import {addShirt, addHat, addKicks, addShades} from '../action/action';

const Remove = () => (
  <div>
    <h1>Remove</h1>
    <button className="remove_items">Shirt(s)</button>
    <button className="remove_items">Hat(s)</button>
    <button className="remove_items">Kicks</button>
    <button className="remove_items">Shades</button>
  </div>
)

export default Remove
