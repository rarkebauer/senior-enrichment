import axios from 'axios';

//ACTION TYPES

const WRITE_STUDENT_FIRST = 'WRITE_STUDENT_FIRST';
const WRITE_STUDENT_LAST = 'WRITE_STUDENT_LAST';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA';
const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';

//ACTION CREATORS

export function writeStudentFirst (content) {
  const action = { type: WRITE_STUDENT_FIRST, content };
  return action;
}

export function writeStudentLast (content) {
  const action = { type: WRITE_STUDENT_LAST, content };
  return action;
}

export function writeStudentEmail (content) {
  const action = { type: WRITE_STUDENT_EMAIL, content };
  return action;
}

export function writeStudentGpa (content) {
  const action = { type: WRITE_STUDENT_GPA, content };
  return action;
}

export function writeStudentCampus (content) {
  const action = { type: WRITE_STUDENT_CAMPUS, content };
  return action;
}

export default function newStudentReducer(state = {}, action) {
  switch (action.type){
    case WRITE_STUDENT_FIRST:
      return Object.assign({}, state, action.content)
    case WRITE_STUDENT_LAST:
      return Object.assign({}, state, action.content)
    case WRITE_STUDENT_EMAIL:
      return Object.assign({}, state, action.content)
    case WRITE_STUDENT_GPA:
      return Object.assign({}, state, action.content)
      case WRITE_STUDENT_CAMPUS:
      return Object.assign({}, state, action.content)
    default:
      return state;
  }
}
