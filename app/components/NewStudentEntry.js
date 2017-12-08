import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { writeStudentFirst, writeStudentLast, writeStudentEmail, writeStudentGpa, writeStudentCampus, postStudent } from '../reducers';


function NewCampusEntry (props) {
  return (
    <form onSubmit={props.submitHandler}>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input type="text" className="form-control" placeholder="Enter first name" value={props.firstNameEntry} onChange={props.handleFirstChange} />
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" className="form-control" placeholder="Enter Last name" value={props.lastNameEntry} onChange={props.handleLastChange} />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" className="form-control" placeholder="Enter email" value={props.emailEntry} onChange={props.handleEmailChange} />
    </div>
    <div className="form-group">
      <label htmlFor="gpa">GPA</label>
      <input type="text" className="form-control" placeholder="Enter GPA" value={props.gpaEntry} onChange={props.handleGpaChange} />
    </div>
    <div className="form-group">
      <label htmlFor="campus">Campus</label>
      <input type="text" className="form-control" placeholder="Enter campus" value={props.campusEntry} onChange={props.handleCampusChange} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    firstNameEntry: state.firstNameEntry,
    lastNameEntry: state.lastNameEntry,
    emailEntry: state.emailEntry,
    gpaEntry: state.gpaEntry,
    campusEntry: state.campusEntry
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
      const action = writeStudentCampus({campus: event.target.value});
      dispatch(action);
    },
    submitHandler(event) {
      event.preventDefault();
      const name = event.target.campusName.value
      const description = event.target.campusDescription.value
      const action = postStudent(name, description, ownProps.history);
      dispatch(action);
    }
  }
}

/** Write your `connect` component below! **/
const newCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)
export default newCampusEntryContainer;
