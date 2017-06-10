import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const WeatherItem = props => (
  <div className="weather-item">
    <div className="weather-item__left-column">
      <div className="weather-item__monthday">
        {props.monthDay}
      </div>
      <div className="weather-item__hour">{props.hour}</div>
      <img
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        className="weather-item__icon"
        alt="ico"
      />
    </div>
    <div className="weather-item__right-column">
      <div className="weather-item__temp">{props.temp}°C</div>
      <div className="weather-item__forecast">
        {
          props.forecast.charAt(0).toUpperCase() +
          props.forecast.slice(1)
        }
      </div>
      <div className="weather-item__humidity">Влажность: {props.humidity}
        {
          props.humidity.toString().length < 3 ? '' : null
        }
      </div>
      <div className="weather-item__pressure">Давление: {props.pressure}</div>
      <div className="weather-item__wind">Ветер: {props.wind} м/с</div>
    </div>
  </div>
);

WeatherItem.propTypes = {
  hour: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  forecast: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default WeatherItem;
