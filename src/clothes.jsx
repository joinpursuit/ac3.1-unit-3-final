import React from 'react'
import {component} from 'react'
import Store from './store'
import { addShirt, addShoes, addHat, addSunglasses} from './action.js'


var Wardrobe = React.createClass({
  render: function() {
    return (<div>
      {['👕','👖', '👗', '👠', '👓'].map(function(threads, idx) {
        return (
          <div key={idx}>
            {threads}
            <button onClick={Store.dispatch.bind(this, addClothing(threads))}></button>
          </div>)
      })}
    </div>)
  }
})

// var Wearables = (props) => (
//   <div>
//     {props.clothes.map(function(wardrobe, idx) {
//       return (<span key={idx}>{wardrobe}</span>)
//     })}
//     <br/>
//       <button onClick={store.dispatch.bind(this, addShirt())}>Sake</button>
//       <button onClick={store.dispatch.bind(this, addShoes())}>Green Tea</button>
//       <button onClick={store.dispatch.bind(this, addHat())}>Ramen</button>
//       <button onClick={store.dispatch.bind(this, addSunglasses())}>Sushi</button>
//   </div>
// )







// var Wearables = React.createClass({
//   render: function(){
//     var output = Store.getState().clothes
//     return(
//       <div>
//         {output.map(function(garment, idx){
//           return (<span key={idx}>{garment}</span>)
//         })}
//         {
//           ['👕', '👞', '🕶', '🎩'].map(function(garment, idx){
//             return (<button key={idx} onClick={Store.dispatch.bind(this, addClothing(garment))}>
//                      {garment}
//                     </button>)
//
//           })
//         }
//       </div>
//     )
//
//   }
// })


export default Wardrobe
