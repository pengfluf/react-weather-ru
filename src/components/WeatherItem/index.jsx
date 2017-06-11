import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const WeatherItem = props => (
  <div className="col-12 col-md-6">
    <div className="weather-item">
      <div className="weather-item__hour">{props.hour}</div>
      <div className="weather-item__main">
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          className="weather-item__icon"
          alt="ico"
        />
        <div className="weather-item__temp">{Math.round(props.temp)} °C</div>
      </div>
      <div className="weather-item__info">
        <div className="weather-item__info-item">
          {
            props.forecast.charAt(0).toUpperCase() +
            props.forecast.slice(1)
          }
        </div>
        <div className="weather-item__info-item">Влажность: {props.humidity} %
        </div>
        <div className="weather-item__info-item">Давление: {Math.round(props.pressure * 0.750064)} мм рт. ст.</div>
        <div className="weather-item__info-item">Ветер: {Math.round(props.wind)} м/с</div>
      </div>
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
