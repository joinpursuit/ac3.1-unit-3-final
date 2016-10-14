import { createStore } from 'redux';
import mainReducer from './reducer.js'; 

const store = createStore(mainReducer);

export default store