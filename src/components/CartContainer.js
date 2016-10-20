import { connect } from 'react-redux';
import Cart from './Cart.jsx';

const mapStoreToProps = store => ({
	items: store.items
})

export default connect(mapStoreToProps)(Cart);