import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './actions';

import AppRouter from './router/AppRouter';

class App extends React.Component {

  // Получим список задач из АПИ при первой загрузке приложения 
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="app__container">
        <AppRouter />
      </div>
    )
  }
}

export default connect(null, { fetchItems })(App);
