import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Routes/Home/HomePresenter';
import Header from '../Components/Header';
import Search from '../Routes/Search/SearchPresenter';
import Movie from '../Routes/Movie/MoviePresenter';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/movie" component={Movie} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)