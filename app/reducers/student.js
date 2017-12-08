import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

//ACTION CREATORS

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

//THUNK CREATORS

export function fetchStudents () {
  return function thunk(dispatch) {
    return axios.get('/api/student')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
  }
}

export function postStudent(first, last, email, gpa, campusId, history) {
  const student = {
    firstName: first,
    lastName: last,
    email,
    gpa,
    campusId}
  return function thunk (dispatch) {
    return axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
      });
  }
}

export default function reducer (state = [], action) {
  switch (action.type){
    case GET_STUDENTS:
    return action.students
    case GET_STUDENT:
    return action.student
    default:
      return state;
  }
}
