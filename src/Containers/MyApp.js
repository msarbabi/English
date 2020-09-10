import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeApp from "../Components/Home";
import SignUp from "../Components/SignUp";
import Books from "../Components/Books";
import AEF from "../Components/AEF";

const MyApp = () => {
    return (
        <React.Fragment>
            <main>
                <Switch>
                    <Route path='/aef/:id' component={AEF} />
                    <Route path='/books' component={Books} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/' component={HomeApp} />
                </Switch>
            </main>
        </React.Fragment>
    );
};

export default MyApp;
