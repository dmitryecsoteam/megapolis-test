import EditForm from './EditForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editItem } from '../../actions';

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    editItem: (title, id) => dispatch(editItem(title, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(EditForm));