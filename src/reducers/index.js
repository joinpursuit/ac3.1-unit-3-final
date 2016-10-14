import { combineReducers } from 'redux';
import ItemsReducer from './reducer_current_items';
import AddItem from './reducer_add_items';

const rootReducer = combineReducers({
  items: ItemsReducer,
  myItems: AddItem,
});

export default rootReducer;
