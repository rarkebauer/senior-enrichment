import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleStudent(props) {
  console.log('Single student props are', props)
  const students = props.students;
  const campuses = props.campuses;
  console.log('campuses array is', campuses)
  const studentId = Number(props.match.params.id);
  const student = students.filter((singleStudent) => {
    return singleStudent.id === studentId;
  });
  const campus = campuses.filter((singleCampus) => {
    return student[0].campusId === singleCampus.id;
  })
   console.log('studentId is', studentId)
    return (
      <div>
         <h1>{student[0].fullName}</h1>
         <h3>{student[0].firstName} attends {
           <Link to={`/campuses/${campus[0].id}`}>{campus[0].name}</Link>
         }</h3>
         <p>Email: {student[0].email}</p>
         <p>GPA: {student[0].gpa}</p>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

function mapStateToProps(state){
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const SinglestudentContainer = connect(mapStateToProps)(SingleStudent)
export default SinglestudentContainer;
