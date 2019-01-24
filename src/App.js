import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <div>
      {/*<p> Esto es un comentario<p>*/}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      </div>
    );
  }
}

export default App;
