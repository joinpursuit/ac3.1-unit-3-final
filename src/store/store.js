import {createStore} from 'redux'
import reducer from '../reducer/reducer.js'

const store = createStore(reducer)

export default store;