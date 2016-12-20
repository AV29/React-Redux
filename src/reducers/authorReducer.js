import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  "use strict";
  const {authors} = action;
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return authors;
    default:
      return state;
  }
}
