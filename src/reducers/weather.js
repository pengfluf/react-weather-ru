import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER } from './../constants';

const initialState = {
  forecast: {},
  fetching: false,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        fetching: true,
      };
    case RECEIVE_WEATHER:
      return {
        ...state,
        forecast: action.forecast,
        fetching: false,
      };
    default:
      return state;
  }
};

export default weather;
