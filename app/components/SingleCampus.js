import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
  console.log('SingleCampus props are', props)
  const campuses = props.campuses;
  const campusId = Number(props.match.params.id);
  const students = props.students.filter((student) => {
    return student.campusId === campusId;
  });
  console.log('campusId is', campusId)
    return (
      <div>
        <h2>{campuses[campusId - 1].name}</h2>
        <p>{campuses[campusId - 1].description}</p>
        <h3>Students</h3>
        <ul>
          {students.map((student) => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>{student.fullName}</Link>
              </li>
             )
          })}
        </ul>
        <div><Link to="/campuses">Go to all Campuses</Link></div>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

function mapStateToProps(state){
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default SingleCampusContainer;
