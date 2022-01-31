import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import alertReducer from './features/alert';
import gameReducer from './features/game';

import { combineReducers } from "redux";

const reducer = combineReducers({
  // here we will be adding reducers
  alerts: alertReducer,
  auth: authReducer,
  game: gameReducer
});

const store = configureStore({
  reducer,
});

export default store;


