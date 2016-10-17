import {connect} from 'react-redux'
import ItemCount from '../components/itemCount'

const appStateToProps = state => (
  {
    itemCount: {
      shirt: state.shirt,
      shoes: state.shoes,
      hat: state.hat,
      sunglasses: state.sunglasses
    }
  }
)

export default connect(appStateToProps)(ItemCount)