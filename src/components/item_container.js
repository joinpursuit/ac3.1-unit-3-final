import {connect} from 'react-redux';
import Items from './items.jsx'


const mapStoreToProps = store => (
	{items: store.items}
)

export default connect(mapStoreToProps)(Items);