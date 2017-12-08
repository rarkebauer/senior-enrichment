import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT_ARR = 'UPDATE_STUDENT_ARR';

//ACTION CREATORS

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function deleteStudent (studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

export function updateStudentArr (studentObj) {
  const action = { type: UPDATE_STUDENT_ARR, studentObj };
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
    campusId
  }
  return function thunk (dispatch) {
    return axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
        history.push(`/students/${newStudent.id}`)
      });
  }
}

export function deleteStudentOnBackend(studentId, history) {
  return function thunk (dispatch) {
    return axios.delete(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(deletedStudent => {
        console.log('deleted', deletedStudent)
        const action = deleteStudent(studentId);
        dispatch(action);
        history.push(`/students`)
      })
  }
}

export default function reducer (state = [], action) {
  switch (action.type){
    case GET_STUDENTS:
    return action.students
    case GET_STUDENT:
    return [...state, action.student]
    case UPDATE_STUDENT_ARR:
    return state.map(student => {
      if (+student.id === +action.studentObj.id) return action.studentObj
      return student
    })
    default:
      return state;
  }
}
