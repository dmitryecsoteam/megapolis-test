import { connect } from 'react-redux';
import { startAddItem, addItem } from '../../actions';
import Popup from './Popup';

const mapDispatchToProps = dispatch => ({
    //addItem: (title, id) => dispatch(startAddItem(title))
    addItem: (title, id) => dispatch(addItem(title, id))
});

export default connect(
    null,
    mapDispatchToProps
  )(Popup);