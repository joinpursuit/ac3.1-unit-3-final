import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store/store'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

 //<IndexRoute component={}/>
