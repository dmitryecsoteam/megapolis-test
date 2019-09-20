import { connect } from 'react-redux';
import { startDeleteItem, deleteItem } from '../../actions';
import ItemList from './ItemList';

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    //deleteItem: id => dispatch(startDeleteItem(id))
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemList);