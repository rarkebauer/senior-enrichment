import React from 'react';
import store from '../store';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import Home from './Home';
import { connect } from 'react-redux';

function Main(props) {
  console.log('props on main are', props)
    return (
      <div>
        <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/campuses" component={CampusList} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/students" component={StudentList} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        </main>
      </div>
    )
}

function mapStateToProps(state){
  console.log('state is ', state)
  return {
    campuses: state.campuses,
    students: state.students
  }
}


const MainContainer = connect(mapStateToProps)(Main)
export default MainContainer;

//export default Main;
