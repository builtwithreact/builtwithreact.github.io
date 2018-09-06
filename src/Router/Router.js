import React from 'react';
import { Route, Link, Switch, BrowserRouter as ReactRouter } from 'react-router-dom';
import Web from './../Components/Compound/Web';

const Router = () => {
    return (
        <ReactRouter>
            <Switch>
                <Route exact path="/" component={Web} />
                <Route exact path="/web" component={Web} />
            </Switch>
        </ReactRouter>
    )
}

export default Router;