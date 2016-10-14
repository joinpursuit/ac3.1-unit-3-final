import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store.js"
import Counter from "./component/Counter.js"

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
