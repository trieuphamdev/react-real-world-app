import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Route path='/login'>
          <LoginContainer />
        </Route>
        <Route path='/register'>
          <RegisterContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
