import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";


//pages
import NotFoundPage from './Pages/404';
import Main from './Main';
import AddPhoto from './Pages/AddPhoto';
import Profile from './Pages/Profile';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/:filter?" component={Profile}></Route>
                    <Route exact path="/addPhoto" component={AddPhoto}></Route>
                    {/* <Route exact path="/404" component={NotFoundPage}></Route>
                    <Redirect to="/404"></Redirect> */}
                </Switch>
            </Router>
        )
    }
}
