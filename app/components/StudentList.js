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
        <tbody>
          { students.map(student => {
            return (
             <tr key={student.id}>
             <td>
             <Link to={`/students/${student.id}`}>{student.fullName}</Link>
             </td>
             <td><button onClick={props.deleteHandler} id={student.id} key={student.id} className="btn btn-danger">x</button>
             </td>
             </tr>
            )
          })
        }
        </tbody>
        <Link to="/new-student"><button className="btn btn-success">Create a new student</button></Link><br />
        <Link to="/"><button className="btn btn-warning">Go Home</button></Link>
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
      const campusId = event.target.id;
      const action = deleteStudentOnBackend(campusId, ownProps.history);
      dispatch(action);
      fetchStudents();
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)
export default StudentListContainer;
