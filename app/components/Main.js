import React from 'react';
import store from '../store';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';
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
            <Route exact path="/students" component={StudentList} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/new-campus" component={NewCampusEntry} />
            <Route path="/new-student" component={NewStudentEntry} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        </main>
      </div>
    )
}

//NEED TO USE WITH ROUTER TO UPDATE PAGE ON NESTED COMPONENT URL CHANGE

export default Main;
