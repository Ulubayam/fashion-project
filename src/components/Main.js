import React from 'react';
import {Route, Switch} from "react-router";
import {Detail, Home} from "../pages";

function Main() {
    return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
    );
}

export default Main;