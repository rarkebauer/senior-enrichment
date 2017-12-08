import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { writeCampusTitle, writeCampusDescription, postCampus } from '../reducers';


function NewCampusEntry (props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div>
        <label htmlFor="name">Create a Campus</label>
        <input className="form-control" type="text" name="campusName" placeholder="Enter campus name" value={props.newCampusTitleEntry} onChange={props.handleTitleChange} />
        <input className="form-control" type="text" name="campusDescription" placeholder="Enter campus description" value={props.newCampusDescriptionEntry} onChange={props.handleDescriptionChange} />
      </div>
      <div className="form-group">
        <button type="submit">Create Campus</button>
      </div>
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    newCampusTitleEntry: state.newCampusTitleEntry,
    newCampusDescriptionEntry: state.newCampusDescriptionEntry
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleTitleChange(event) {
      console.log(event.target.value)
      const action = writeCampusTitle({title: event.target.value});
      dispatch(action);
    },
    handleDescriptionChange(event) {
      console.log(event.target.value)
      const action = writeCampusDescription({description: event.target.value});
      dispatch(action);
    },
    submitHandler(event) {
      event.preventDefault();
      const name = event.target.campusName.value
      const action = postCampus({name}, ownProps.history);
      dispatch(action);
      dispatch(writeCampusTitle(''));
    }
  }
}

/** Write your `connect` component below! **/
const newCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)
export default newCampusEntryContainer;
