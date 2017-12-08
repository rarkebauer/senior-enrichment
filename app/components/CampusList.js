import React from 'react';
import store, { deleteCampus }  from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CampusList(props) {
  console.log('campusList props are', props)
  const campuses = props.campuses;
    return (
      <div>
        <h3>Campuses</h3>
        <ul>
          { campuses.map(campus => {
            return (
             <li key={campus.id}>
               <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              <button onClick={props.deleteHandler} id={campus.id}>Delete this campus</button>
             </li>
            )
          })
        }
        </ul>
        <div><Link to="/new-campus">Create a new campus</Link></div>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

function mapStateToProps(state){
  console.log('state is ', state)
  return {
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteHandler(event) {
      event.preventDefault();
      console.log('in deleteHandler event.target.id', event.target.id)
      const campusId = event.target.id;
      console.log('campusId is', campusId)
      const action = deleteCampus(campusId);
      dispatch(action);
    }
  }
}

const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList)
export default campusListContainer;
