/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';

import campuses from './campus';
import students from './student';
import writeNewCampus from './writeNewCampus';

const combinedReducer = combineReducers({
  campuses,
  students,
  writeNewCampus
})

export default combinedReducer;

export * from './campus';
export * from './student';
export * from './writeNewCampus';

