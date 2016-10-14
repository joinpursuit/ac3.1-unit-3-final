import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


//REDUCER
const reducerCounter = (state = 0, action) =>
{
  switch(action.type) 
  {
    case "INCREASE_SHIRT":
      return state + 1
    case "INCREASE_SHOES":
      return state + 1
    case "INCREASE_HAT":
      return state + 1
    case "INCREASE_SUNGLASSES":
      return state + 1
    default:
      return state
  }
};


//STORE
const store = createStore(reducerCounter)


//ACTIONS
const App = React.createClass
({
  dispatchIncreaseShirt: function()
  {
    store.dispatch({type: 'INCREASE_SHIRT', item: 'shirt'})
  },

  dispatchIncreaseShoes: function()
  {
    store.dispatch({type: 'INCREASE_SHOES'})
  },

  dispatchIncreaseHat: function()
  {
    store.dispatch({type: 'INCREASE_HAT'})
  },

  dispatchIncreaseSunglasses: function()
  {
    store.dispatch({type: 'INCREASE_SUNGLASSES'})
  },

  render: function() 
  {
    var items = []
    for (let i = 0 ; i < store.getState() ; i++)
    {
      items.push(<li key={i+1}>{store.dispatch.item}</li>)
    }

    return(
      <div>
        
        <div>
          {store.getState()}
        </div>

        <div>
          <h2>ADD AN ITEM</h2>
          <button onClick={this.dispatchIncreaseShirt}> SHIRT</button>
          <button onClick={this.dispatchIncreaseShoes}> SHOES</button>
          <button onClick={this.dispatchIncreaseHat}> HAT</button>
          <button onClick={this.dispatchIncreaseSunglasses}> SUNGLASSES</button>
        </div>

        <div>
          <ul>
            {items}
          </ul>
        </div>

      </div>
    )
  }
});

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);

