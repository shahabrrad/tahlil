import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import GroupsPage from './Group/GroupsPage';
import Dashboard from './users/Dashboard';
import Alerts from './layout/Alerts';
import LoginPage from './accounts/Login/LoginPage';
import Signup from './accounts/Signup/Signup';
import PrivateRoute from './common/PrivateRoute';
import UserPage from './users/UserPage';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Dashboard />
              <Alerts />

              <Switch>
                <PrivateRoute exact path="/" component={GroupsPage} />
                <PrivateRoute exact path="/groups" component={GroupsPage} />
                <Route exact path="/register" component={Signup} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>

            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));