import React, { Component } from 'react';

import Buttons from '../containers/button-list';
import ItemList from '../containers/item-list';
import MyItems from '../containers/my-items';

export default class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <ItemList />
        <MyItems />
      </div>
    );
  }
}
