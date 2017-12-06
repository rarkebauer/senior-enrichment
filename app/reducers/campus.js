import axios from 'axios';

//ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';

//ACTION CREATORS

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
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

export default function reducer (state = [], action) {
  switch (action.type){
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}
