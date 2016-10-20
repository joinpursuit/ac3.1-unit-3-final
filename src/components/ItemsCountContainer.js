import { connect } from 'react-redux';
import ItemsCount from './ItemsCount.jsx';

const mapStoreToProps = store => ({
	items: store.items
})

export default connect(mapStoreToProps)(ItemsCount);