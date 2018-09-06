import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Web from './../Web';



const App = () => {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/" component={Web} />
          <Route exact path="/web" component={Web} />
        </switch>
      </Router>
    </div>
  )
}

export default App;
