import { combineReducers } from 'redux';

import date from './date';
import weather from './weather';

const rootReducer = combineReducers({
  date,
  weather,
});

export default rootReducer;
