import React from 'react';
import store from '../store';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import Home from './Home';
import { connect } from 'react-redux';

function Main() {
    return (
      <div>
        <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/students" component={StudentList} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        </main>
      </div>
    )
}

export default Main;
