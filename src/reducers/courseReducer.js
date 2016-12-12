import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action = '') {
  "use strict";
  const {courses} = action;
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return courses;
    default:
      return state;
  }
}
