import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { writeCampusTitle, writeCampusDescription, updateCampusOnBackend } from '../reducers';

function SingleCampus(props) {
  console.log('SingleCampus props are', props)
  const campusId = Number(props.match.params.id);
  const students = props.students.filter((student) => {
    return student.campusId === campusId;
  });
  const campus = props.campuses.filter((singleCampus) => {
    return singleCampus.id === campusId;
  })
  console.log('campusId is', campusId)
    return (
      <div>
        <h2>{campus[0].name}</h2>
        <p>{campus[0].description}</p>
        <h3>Students</h3>
        <ul>
          {students.map((student) => {
            return (
              <li key={student.id} value={props.campusId}>
                <Link to={`/students/${student.id}`}>{student.fullName}</Link>
              </li>
             )
          })}
        </ul>

        <h2>Edit Campus Information</h2>
        <form onSubmit={props.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Campus Name</label>
            <input type="text" name="name" onChange={props.handleTitleChange} value={props.name} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Campus description</label>
            <input type="text" name="description" onChange={props.handleDescriptionChange} value={props.description} />
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div><Link to="/campuses">Go to all Campuses</Link></div>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

function mapStateToProps(state){
  return {
    campuses: state.campuses,
    students: state.students,
    name: state.name,
    description: state.description
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleTitleChange(event){
      const campusTitle = event.target.value;
      console.log(campusTitle)
      const action = writeCampusTitle(campusTitle)
      dispatch(action)
    },
    handleDescriptionChange(event){
      const campusDescription = event.target.value;
      console.log(campusDescription)
      const action = writeCampusDescription(campusDescription)
      dispatch(action)
    },
    submitHandler(event){
      event.preventDefault();
      const name = event.target.name.value;
      console.log('event.target.name is ', name)
      const description = event.target.description.value;
      const campusId = Number(ownProps.match.params.id);
      const action = updateCampusOnBackend(name, description, campusId, ownProps.history);
      dispatch(action);
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
export default SingleCampusContainer;
