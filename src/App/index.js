import React from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './../Components/BaseComponents/Header';
import SubHeader from './../Components/BaseComponents/SubHeader';
import ReactWeb from './../Components/BusinessComponents/ReactWeb';

import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <Header />
      <SubHeader />
      <main className="App__Body container">
        <Route exact path="/" component={ReactWeb} />
        <Route path="/ReactWeb" component={ReactWeb} />
      </main>
    </div>
  </Router>
)

export default App;