import { connect } from 'react-redux';
import { startAddItem } from '../../actions';
import Popup from './Popup';

const mapDispatchToProps = dispatch => ({
    addItem: title => dispatch(startAddItem(title))
});

export default connect(
    null,
    mapDispatchToProps
  )(Popup);