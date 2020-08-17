import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Main, Site, Container, Join } from 'pages';
import AOS from 'aos';
import './App.css';

function App() {
  AOS.init();
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/site" component={Site} />
        <Route path="/container/:id" component={Container} />
        <Route path="/join" component={Join} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
