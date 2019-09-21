import Header from './Header';
import { connect } from 'react-redux';
import { startDeleteItem } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(startDeleteItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Header));