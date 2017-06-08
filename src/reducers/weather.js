import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER } from './../constants';

const initialState = {
  fetching: false,
  forecast: {},
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
        fetching: false,
        weather: action.weather,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default weather;
