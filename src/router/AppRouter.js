import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../components/MainPage';
import ItemPage from '../components/ItemPage';

export default () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/items" component={MainPage} />
        <Route path="/items/:id" component={ItemPage} />>
    </Switch>
  </BrowserRouter>  
);