import fetch from 'isomorphic-fetch';

import {
  SET_DATE,
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  API_CITY,
  API_URL,
  API_LANG,
  API_UNITS,
  API_KEY } from './../constants';

export const selectDate = date => ({
  type: SET_DATE,
  date,
});

const requestWeather = weather => ({
  type: REQUEST_WEATHER,
  weather,
});

const receiveWeather = (weather, json) => ({
  type: RECEIVE_WEATHER,
  forecast: json,
});

export const fetchWeather = weather =>
  (dispatch) => {
    dispatch(requestWeather(weather));
    return fetch(`${API_URL}${API_CITY}${API_LANG}${API_UNITS}${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(weather, json)));
  };
