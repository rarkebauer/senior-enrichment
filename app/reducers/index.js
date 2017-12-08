import { combineReducers } from 'redux';

import campuses from './campus';
import students from './student';
import writeNewCampus from './writeNewCampus';
import writeNewStudent from './writeNewStudent';

const combinedReducer = combineReducers({
  campuses,
  students,
  writeNewCampus,
  writeNewStudent
})

export default combinedReducer;

export * from './campus';
export * from './student';
export * from './writeNewCampus';
export * from './writeNewStudent';

