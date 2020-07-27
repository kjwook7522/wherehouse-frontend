import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Site, Container } from 'pages';
import AOS from 'aos';
import './App.css';

function App() {
  AOS.init();
  
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/site" component={Site} />
      <Route path="/container" component={Container} />
    </BrowserRouter>
  );
}

export default App;
