import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers'

// function matchStateToProps(state){
//   console.log(state)
//   return {
//     campuses: state.campuses
//   }
// }

function matchDispatchToProps(dispatch){
  const campusesThunk = fetchCampuses();
  const campuses = dispatch(campusesThunk)
  return {
    campuses
  }
}

function CampusList(props) {
  console.log(props.campuses)
    return (
      <div>
        <h3>I'm the campusList</h3>
      </div>
    )
}

const campusListContainer = connect(null, matchDispatchToProps)(CampusList)
export default campusListContainer;
