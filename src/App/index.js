import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './../Components/BaseComponents/Header';
import Home from './../Components/BusinessComponents/Home';
import ReactWeb from './../Components/BusinessComponents/ReactWeb';
import DetailsPage from './../Components/BusinessComponents/DetailsPage';
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
      <Route exact path="/" component={Home} />
      <Route exact path="/ReactWeb" component={ReactWeb} />
      <Route path="/ReactWeb/:id" render={(props)=> <DetailsPage {...props} title="React Web"/>}/>
      <Route exact path="/ReactNative" component={ReactNative} />
      <Route path="/ReactNative/:id" render={(props)=> <DetailsPage {...props} title="React Native"/>}/>
      <Route exact path="/ReactBlogs" component={ReactBlogs} />
      <Route exact path="/ReactTools" component={ReactTools} />
      <Route path="/Feedback" component={Feedback} />
      <Route path="/SubmitRequest" component={SubmitRequest} />
    </div>
  </Router>
)

export default App;