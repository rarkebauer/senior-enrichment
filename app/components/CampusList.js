import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CampusList(props) {
  console.log('campuses are', props.campuses)
  const campuses = props.campuses;
    return (
      <div>
        <h3>Campuses</h3>
        <ul>
          { campuses.map(campus => {
            return (
             <li key={campus.id}><Link to={`/campus/${campus.id}`}>{campus.name}</Link></li>
            )
          })
        }
        </ul>
        <div><Link to="/">Go Home</Link></div>
      </div>
    )
}

// function mapStateToProps(state){
//   console.log('state is ', state)
//   return {
//     campuses: state.campuses
//   }
// }

export default CampusList
// const campusListContainer = connect(mapStateToProps)(CampusList)
// export default campusListContainer;
