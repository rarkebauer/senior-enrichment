import { combineReducers } from 'redux';

import campuses from './campus';
import students from './student';
import writeNewCampus from './writeNewCampus';
import writeNewStudent from './writeNewStudent';
import updateStudent from './updateStudent';

const combinedReducer = combineReducers({
  campuses,
  students,
  writeNewCampus,
  writeNewStudent,
  updateStudent
})

export default combinedReducer;

export * from './campus';
export * from './student';
export * from './writeNewCampus';
export * from './writeNewStudent';
export * from './updateStudent';

