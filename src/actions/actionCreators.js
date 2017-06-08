import fetch from 'isomorphic-fetch';

import {
  SET_DATE,
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  CITY,
  API_URL,
  API_KEY } from './../constants';

export const setDate = date => ({
  type: SET_DATE,
  date,
});

const requestWeather = weather => ({
  type: REQUEST_WEATHER,
  weather,
});

const receiveWeather = weather => ({
  type: RECEIVE_WEATHER,
  weather,
  list: JSON.data.children.map(child => child.data),
  receivedAt: new Date().getTime(),
});

const fetchWeather = weather =>
  (dispatch) => {
    dispatch(requestWeather(weather));
    return fetch(`${API_URL}${CITY}${API_KEY}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(weather, json)));
  };

const shouldFetchWeather = (state) => {
  const forecast = state.list;
  switch (forecast) {
    case !forecast:
      return true;
    case forecast:
      return false;
    default:
      return state;
  }
};

export const fetchWeatherIfNeeded = weather =>
  (dispatch, getState) => {
    if (shouldFetchWeather(getState(), weather)) {
      return dispatch(fetchWeather(weather));
    }
    return null;
  };
