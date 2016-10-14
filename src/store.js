import {createStore} from 'redux';
import mainReducer from './reducers.js';


const store= createStore(mainReducer);

export default store;
