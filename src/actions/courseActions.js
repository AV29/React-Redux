import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSeccess(courses) {
  "use strict";
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  "use strict";
  return { type: types.CREATE_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
  "use strict";
  return { type: types.UPDATE_COURSES_SUCCESS, course };
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

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
