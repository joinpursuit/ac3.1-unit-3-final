// IMPORT STORE
import {createStore} from 'redux';

// IMPORT REDUCER
import {mainReducer} from '../reducers/mainReducer.js';

// CREATE/EXPORT STORE
export const store = createStore(mainReducer);  


