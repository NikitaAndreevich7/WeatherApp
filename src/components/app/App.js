import React from 'react';
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home-page/" component={HomePage} />
          <LoginPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
