import axios from 'axios';

//ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

//ACTION CREATORS

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action
}

//THUNK CREATORS

export function fetchCampuses () {
  return function thunk(dispatch) {
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      })
  }
}

export function postCampus(name, description, history) {
  const campus = {name, description}
  return function thunk (dispatch) {
    return axios.post('/api/campus', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus);
        dispatch(action);
        history.push(`/campuses/${newCampus.id}`)
      });
  }
}

export function deleteCampus(campusId) {
  return function thunk (dispatch) {
    return axios.remove(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(deletedCampus => {
        console.log('deleted', deletedCampus)
        history.push(`/campuses`)
      })
  }
}

export default function reducer (state = [], action) {
  switch (action.type){
    case GET_CAMPUSES:
    return action.campuses
    case GET_CAMPUS:
    return [...state, action.campus];
    default:
      return state;
  }
}
