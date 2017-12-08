import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function StudentList({students}) {
  console.log('students are', students)
    return (
      <div>
        <h3>Students</h3>
        <ul>
          { students.map(student => {
            return (
             <li key={student.id}>
             <Link to={`/students/${student.id}`}>{student.fullName}</Link>
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


const StudentListContainer = connect(mapStateToProps)(StudentList)
export default StudentListContainer;
