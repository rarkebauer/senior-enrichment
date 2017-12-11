import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampusOnBackend, fetchCampuses } from '../reducers'

function CampusList(props) {
  console.log('campusList props are', props)
  const campuses = props.campuses;
    return (
      <div>
        <h3>Campuses</h3>
        <tbody>
          { campuses.map(campus => {
            return (
            <tr key={campus.id}>
             <td>
               <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
             </td>
             <td><button onClick={props.deleteHandler} id={campus.id} key={campus.id} className="btn btn-danger">x</button>
            </td>
            </tr>
            )
          })
        }
        </tbody>
        <Link to="/new-campus"><button className="btn btn-success">Create a new campus</button></Link><br />
        <Link to="/"><button className="btn btn-warning">Go Home</button></Link>
      </div>
    )
}

function mapStateToProps(state){
  console.log('state is ', state)
  return {
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    deleteHandler(event) {
      event.preventDefault();
      console.log('in deleteHandler event.target.id', event.target.id)
      const campusId = event.target.id;
      console.log('campusId is', campusId)
      const action = deleteCampusOnBackend(campusId, ownProps.history);
      dispatch(action);
      fetchCampuses();
    }
  }
}

const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList)
export default campusListContainer;
