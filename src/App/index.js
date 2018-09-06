import React from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './../Components/BaseComponents/Header';
import SubHeader from './../Components/BaseComponents/SubHeader';

import './App.css';


const App = () => (
      <Router>
        <div className="App">
          <Header />
          <SubHeader />
          {/* <main className="container">
            <Route exact path="/" component={Containers.ReactWebPage} />
            <Route path="/ReactWeb" component={Containers.ReactWebPage} />
          </main> */}
        </div>
      </Router>
)

export default App;