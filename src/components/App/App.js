import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import { MainPage, ChannelsPage } from '../../pages';
import './style.scss';

function App() {
  return (
    <div className="App">
      <i className="icon--square"></i>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/main"
            component={MainPage}
          />
          <Route
            exact
            path="/channels"
            component={ChannelsPage}
          />
          <Redirect to="/main" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
