import { connect } from 'react-redux';
import { startDeleteItem } from '../../actions';
import ItemList from './ItemList';

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(startDeleteItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemList);