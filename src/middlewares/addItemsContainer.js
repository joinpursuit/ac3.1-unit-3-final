import {connect} from 'react-redux'
import AddItems from '../components/addItems'

const appStateToProps = state => (
  {
    buttonItems: state.buttonItems,
    items: state.items
  }
)

export default connect(appStateToProps)(AddItems)
