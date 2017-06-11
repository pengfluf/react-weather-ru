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
        lastUpdated: new Date().toLocaleString('ru',
          {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          }),
      };
    default:
      return state;
  }
};

export default weather;
