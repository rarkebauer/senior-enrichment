import axios from 'axios';

//ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

//ACTION CREATORS

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function deleteCampus(campusId) {
  const action = { type: DELETE_CAMPUS, campusId };
  return action;
}

export function updateCampus(updatedCampus){
  const action = { type: UPDATE_CAMPUS, updatedCampus };
  return action;
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

export function updateCampusOnBackend(name, description, campusId, history) {
  const campus = {name, description}
  return function thunk (dispatch) {
    return axios.put(`/api/campus/${campusId}`, campus)
      .then(res => res.data)
      .then(updatedCampus => {
        const action = updateCampus(updatedCampus);
        dispatch(action);
        history.push(`/campuses`)
      });
  }
}

export function deleteCampusOnBackend(campusId, history) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(deletedCampus => {
        console.log('deleted', deletedCampus)
        const action = deleteCampus(campusId);
        dispatch(action);
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
    case DELETE_CAMPUS:
      return state.filter(campus => {
        return +campus.id !== +action.campusId;
      })
    case UPDATE_CAMPUS:
      return state.map(campus => {
        if (+campus.id === +action.updatedCampus.id) return action.updatedCampus
        return campus
      })
    default:
      return state;
  }
}

