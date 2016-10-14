import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ItemList extends Component {

  renderTotal(item) {
    let total =0;
    this.props.myItems.forEach((a) => {
      if(a == item){
        total+=1
      }
    })
    return total
  }
  renderList () {
    return this.props.items.map((item,indx) => {
      return (
        <li key={indx}>
          <ol>
            <li>Product: {item.product}</li>
            <li> total: {this.renderTotal(item.product)}</li>
          </ol>
          <br/>
        </li>

      );
    });
  }

  render () {
    return (<ul> {this.renderList()} </ul>);
  }

}

function mapStateToProps(state) {
  return {
    items: state.items,
    myItems: state.myItems
  };
}


export default connect(mapStateToProps)(ItemList);
