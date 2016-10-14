import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyItems extends Component {
  renderList () {
    if(!this.props.myItems){
      return(<h1>Select a Button</h1>)
    }

    return this.props.myItems.map((item,indx) => {
      return (
        <li key={indx}>
          {item}
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


export default connect(mapStateToProps)(MyItems);
