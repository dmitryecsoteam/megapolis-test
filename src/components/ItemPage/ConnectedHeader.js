import Header from './Header';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
    null,
    mapDispatchToProps
  )(withRouter(Header));