import {connect} from 'react-redux';
import ItemsCount from './ItemsCount';

const mapStoreToProps = store => (
	{items: store.items}
)

export default connect(mapStoreToProps)(ItemsCount)