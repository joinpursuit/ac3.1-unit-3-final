import { connect } from 'react-redux';
import RemoveItem from './RemoveItem.jsx';

const mapStoreToProps = store => ({
	items: store.items
})

export default connect(mapStoreToProps)(RemoveItem);