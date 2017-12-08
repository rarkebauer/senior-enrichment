import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStudent, updateStudentOnBackend } from '../reducers';

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
        <div><Link to="/students">See All Students</Link></div>
        <div><Link to="/">Go Home</Link></div>

        <form onSubmit={props.submitHandler}>
        <div className="form-group" name="studentId" value={studentId} />
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" onChange={props.handleChange} value={props.firstName} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={props.handleChange} value={props.lastName} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={props.handleChange} value={props.email} />
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA</label>
            <input type="text" name="gpa" onChange={props.handleChange} value={props.gpa} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

function mapStateToProps(state){
  return {
    students: state.students,
    campuses: state.campuses,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    gpa: state.gpa,
    campusEntry: state.campusEntry
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChange(event){
      const studentObj = {
        [event.target.name]: event.target.value
      }
      console.log(studentObj)
      const action = updateStudent(studentObj)
      dispatch(action)
    },
    submitHandler(event) {
      event.preventDefault();
      const studentId = Number(ownProps.match.params.id);
      console.log('ownProps are ', ownProps)
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const gpa = event.target.gpa.value;
      const studentObj = {
        id: studentId,
        firstName,
        lastName,
        email,
        gpa
      }
      console.log('event.target submit handler are ', event.target)
      console.log('student obj is ', studentObj)
      const action = updateStudentOnBackend(studentObj)
      dispatch(action)
    }
  }
}

const SinglestudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
export default SinglestudentContainer;
