import React from 'react';
import {Route, Switch} from "react-router";
import {Detail, Home} from "../pages";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail" component={Detail}/>
            </Switch>
        </div>
    );
}

export default Main;