import axios from 'axios'
//ACTION TYPES

const UPDATE_STUDENT = 'UPDATE_STUDENT'

//ACTION CREATORS

export function updateStudent (studentObj) {
  const action = { type: UPDATE_STUDENT, studentObj };
  return action;
}

//UPDATE THUNK
export function updateStudentOnBackend(studentObj, history) {
  console.log('got to thunk')
  return function thunk (dispatch) {
    return axios.put(`/api/student/${studentObj.id}`, studentObj)
      .then(res => res.data)
      .then(updatedStudent => {
        const action = updateStudent(updatedStudent);
        dispatch(action);
        history.push(`/students/${studentObj.id}`)
      })
      .catch(console.error.bind(console));
  }
}

export default function updateStudentReducer(state = {}, action) {
  switch (action.type){
    case UPDATE_STUDENT:
      return Object.assign({}, state, action.studentObj)
    default:
      return state;
  }
}
