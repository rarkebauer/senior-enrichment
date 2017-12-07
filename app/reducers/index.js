/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';

import campuses from './campus';


const combinedReducer = combineReducers({
  campuses
})


export default combinedReducer;

// import { combineReducers } from 'redux'

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// };

// export default rootReducer

export * from './campus';
