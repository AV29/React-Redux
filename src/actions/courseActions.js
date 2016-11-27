import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function loadCoursesSeccess(courses) {
  "use strict";
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  "use strict";
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSeccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
