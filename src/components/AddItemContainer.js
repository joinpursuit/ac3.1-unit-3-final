import { connect } from 'react-redux';
import AddItem from './AddItem.jsx';

const mapStoreToProps = store => ({
	items: store.items
})

export default connect(mapStoreToProps)(AddItem);