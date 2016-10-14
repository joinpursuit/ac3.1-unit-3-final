import {connect} from 'react-redux';
import ItemsList from './ItemsList';

const mapStoreToProps = store => (
	{items: store.items}
)

export default connect(mapStoreToProps)(ItemsList)