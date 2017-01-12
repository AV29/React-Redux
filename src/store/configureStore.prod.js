import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  "use strict";
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk
    )
  );
}
