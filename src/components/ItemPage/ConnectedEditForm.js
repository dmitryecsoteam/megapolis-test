import EditForm from './EditForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startEditItem } from '../../actions';

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    editItem: (title, id) => dispatch(startEditItem(title, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(EditForm));