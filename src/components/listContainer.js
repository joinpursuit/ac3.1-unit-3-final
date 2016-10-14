// IMPORTING REACT REDUX MODULES
import {connect} from 'react-redux';

// IMPORT COMPONENTS TO CONNECT
import {List} from './List.js';

// PACKAGE STATE TO BE PASSED TO COMPONENTS
const mapStateToProps = state => ({
  shirts: state.shirts,
  pants: state.pants,
  shoes: state.shoes,
  socks: state.socks
})

// PASS STATE TO LIST COMPONENTS
export const ListContainer = connect(mapStateToProps)(List);