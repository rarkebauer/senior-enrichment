import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { writeStudentFirst, writeStudentLast, writeStudentEmail, writeStudentGpa, writeStudentCampus, postStudent } from '../reducers';


function NewStudentEntry (props) {
  console.log('props on newstudententry are', props)
  const campuses = props.campuses;
  return (
  <div>
    <form onSubmit={props.submitHandler}>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input type="text" className="form-control" placeholder="Enter first name" value={props.firstNameEntry} onChange={props.handleFirstChange} name="first" />
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" className="form-control" placeholder="Enter Last name" value={props.lastNameEntry} onChange={props.handleLastChange} name="last" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" className="form-control" placeholder="Enter email" value={props.emailEntry} onChange={props.handleEmailChange} name="email" />
    </div>
    <div className="form-group">
      <label htmlFor="gpa">GPA</label>
      <input type="text" className="form-control" placeholder="Enter GPA" value={props.gpaEntry} onChange={props.handleGpaChange} name="gpa" />
    </div>
    <div className="form-group">
      <label htmlFor="campus">Campus list:</label>
        <select type="text" className="form-control dropdown-toggle" value={props.campusEntry} onChange={props.handleCampusChange} name="campusId" >
          { campuses.map(campus => {
            return (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
            )
          })
          }
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form> <br />
    <Link to="/students"><button className="btn btn-success">Go To Student List</button></Link> <br />
    <Link to="/"><button className="btn btn-warning">Go Home</button></Link>
  </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    firstNameEntry: state.firstNameEntry,
    lastNameEntry: state.lastNameEntry,
    emailEntry: state.emailEntry,
    gpaEntry: state.gpaEntry,
    campusEntry: state.campusEntry,
    campuses: state.campuses
  }
}

// { writeStudentFirst, writeStudentLast, writeStudentEmail, writeStudentGpa, writeStudentCampus, postStudent }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleFirstChange(event) {
      console.log(event.target.value)
      const action = writeStudentFirst({first: event.target.value});
      dispatch(action);
    },
    handleLastChange(event) {
      console.log(event.target.value)
      const action = writeStudentLast({last: event.target.value});
      dispatch(action);
    },
    handleEmailChange(event) {
      console.log(event.target.value)
      const action = writeStudentEmail({email: event.target.value});
      dispatch(action);
    },
    handleGpaChange(event) {
      console.log(event.target.value)
      const action = writeStudentGpa({gpa: event.target.value});
      dispatch(action);
    },
    handleCampusChange(event) {
      console.log(event.target.value)
      const action = writeStudentCampus({campusId: event.target.value});
      dispatch(action);
    },
    submitHandler(event) {
      event.preventDefault();
      const first = event.target.first.value;
      const last = event.target.last.value;
      const email = event.target.email.value;
      const gpa = event.target.gpa.value;
      const campusId = Number(event.target.campusId.value);
      const action = postStudent(first, last, email, gpa, campusId, ownProps.history);
      dispatch(action);
    }
  }
}

/** Write your `connect` component below! **/
const newStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry)
export default newStudentEntryContainer;
