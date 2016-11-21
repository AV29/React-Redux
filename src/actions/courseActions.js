import * as types from './actionTypes';

export function createCourse(course) {
  "use strict";
  return { type: types.CREATE_COURSE, course };
}
