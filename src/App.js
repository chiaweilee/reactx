import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NotFound from './components/error/notfound';

import store from './store';

export default class App extends Component {
  render() {
    return (<Provider store={store}>
      <Router>
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>);
  }
}
