import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudentOnBackend, fetchStudents } from '../reducers'

function StudentList(props) {
  const students = props.students;
  console.log('students are', students)
    return (
      <div>
        <h3>Students</h3>
        <ul>
          { students.map(student => {
            return (
             <li key={student.id}>
             <Link to={`/students/${student.id}`}>{student.fullName}</Link>
             <button onClick={props.deleteHandler} id={student.id} key={student.id}>Delete this student</button>
             </li>
            )
          })
        }
        </ul>
        <div><Link to="/new-student">Create a new student</Link></div>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

function mapStateToProps(state){
  console.log('state is ', state)
  return {
    students: state.students
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    deleteHandler(event) {
      event.preventDefault();
      console.log('in deleteHandler event.target.id', event.target.id)
      const campusId = event.target.id;
      console.log('campusId is', campusId)
      const action = deleteStudentOnBackend(campusId, ownProps.history);
      dispatch(action);
      fetchStudents();
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)
export default StudentListContainer;
