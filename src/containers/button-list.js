import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from "../actions/index";

class Buttons extends Component {
  renderButtons () {
    return this.props.items.map((item,indx) => {
      return (
        <button
          onClick={() => {this.props.addItem(item.product)}}
          key={indx}>
          {item.product}
        </button>
      );
    });
  }

  render () {
    return (<div> {this.renderButtons()} </div>);
  }

}

function mapStateToProps(state) {
  console.log(state)

  return {
    items: state.items,
    myItems: state.myItems
  };
}

function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result is passed to all our reducers.

  return bindActionCreators({addItem:addItem}, dispatch);

}

// Promote the Component BookList to a container that has access to state as props
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
