import { connect } from 'react-redux';
import { startAddItem } from '../../actions';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
    addItem: (title, id) => dispatch(startAddItem(title))
});

export default connect(
    null,
    mapDispatchToProps
  )(Header);