import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers'


// function mapDispatchToProps(dispatch){

//   return {
//     fetch(){
//       const campusesThunk = fetchCampuses();
//       dispatch(campusesThunk)
//     }
//   }
// }

function CampusList(props) {
  console.log('props are', props)
  const campuses = props.campuses;
  console.log('campuses are', campuses)
  const campusArr = campuses.campuses
    return (
      <div>
        {/* <ul>
          { campusArr.map(campus => campus.name) }
        </ul> */}
        <button>See Campuses</button>
        <h3>I'm the campusList</h3>
      </div>
    )
}

function mapStateToProps(state){
  return {
    campuses: state.campuses
  }
}


const campusListContainer = connect(mapStateToProps)(CampusList)
export default campusListContainer;
