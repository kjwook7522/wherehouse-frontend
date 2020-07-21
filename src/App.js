import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Site } from 'pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/site" component={Site} />
    </BrowserRouter>
  );
}

export default App;
