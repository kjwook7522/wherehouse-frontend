import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Main, Site, Container, Join, Login, Admin, Category } from 'pages';
import { ScrollToTop } from 'components';
import AOS from 'aos';
import AXIOS from 'axios';
import './App.css';

function App() {
  AOS.init();
  AXIOS.defaults.baseURL = "http://3.35.83.208:8080/v2";
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>  
        <Route exact path="/" component={Main} />
        <Route path="/site" component={Site} />
        <Route path="/container/:id" component={Container} />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/category/:item" component={Category} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
