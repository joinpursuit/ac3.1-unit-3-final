import { createStore } from 'redux';
import reducer from './Reducer.js'

const Store = createStore(reducer)


export default Store;