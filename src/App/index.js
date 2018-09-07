import React from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './../Components/BaseComponents/Header';
import ReactWeb from './../Components/BusinessComponents/ReactWeb';
import ReactNative from './../Components/BusinessComponents/ReactNative';
import ReactBlogs from './../Components/BusinessComponents/ReactBlogs';
import ReactTools from './../Components/BusinessComponents/ReactTools';
import Feedback from './../Components/BusinessComponents/Feedback';
import SubmitRequest from './../Components/BusinessComponents/SubmitRequest';

import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={ReactWeb} />
      <Route path="/ReactWeb" component={ReactWeb} />
      <Route path="/ReactBlogs" component={ReactBlogs} />
      <Route path="/ReactNative" component={ReactNative} />
      <Route path="/ReactTools" component={ReactTools} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/SubmitRequest" component={SubmitRequest} />
    </div>
  </Router>
)

export default App;