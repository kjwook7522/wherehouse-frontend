import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Main, Site, Container, Join, Login } from 'pages';
import AOS from 'aos';
import AXIOS from 'axios';
import './App.css';

function App() {
  AOS.init();
  AXIOS.defaults.baseURL = "http://api.banchango.shop/v1";
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/site" component={Site} />
        <Route path="/container/:id" component={Container} />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
