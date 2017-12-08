import axios from 'axios';

//ACTION TYPES

const WRITE_CAMPUS_TITLE = 'WRITE_CAMPUS_TITLE';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';

//ACTION CREATORS

export function writeCampusTitle (content) {
  const action = { type: WRITE_CAMPUS_TITLE, content };
  return action;
}

export function writeCampusDescription (content) {
  const action = { type: WRITE_CAMPUS_DESCRIPTION, content };
  return action;
}

export default function newCampusReducer(state = {}, action) {
  switch (action.type){
    case WRITE_CAMPUS_TITLE:
      return Object.assign({}, state, action.content)
    case WRITE_CAMPUS_DESCRIPTION:
      return Object.assign({}, state, action.content)
    default:
      return state;
  }
}
