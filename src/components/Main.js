import React from 'react';
import {Router, Route, Switch} from "react-router";
import {Detail, Home} from "../pages";
import history from '../history'

function Main(props) {
    return (
        <Router history={history}> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
        </Router>
    );
}

export default Main;