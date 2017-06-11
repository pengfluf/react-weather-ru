import React from 'react';
import PropTypes from 'prop-types';
import translit from './../../utils/translit';

import './index.css';

const WeatherListHeader = (props) => {
  const list = props.weather.forecast.list;
  const cityName = props.weather.forecast.city.name;
  let month = new Date(list[0].dt * 1000).getMonth();

  switch (month) {
    case 0:
      month = 'января';
      break;
    case 1:
      month = 'февраля';
      break;
    case 2:
      month = 'марта';
      break;
    case 3:
      month = 'апреля';
      break;
    case 4:
      month = 'мая';
      break;
    case 5:
      month = 'июня';
      break;
    case 6:
      month = 'июля';
      break;
    case 7:
      month = 'августа';
      break;
    case 8:
      month = 'сентября';
      break;
    case 9:
      month = 'октября';
      break;
    case 10:
      month = 'ноября';
      break;
    default:
      month = 'декабря';
      break;
  }

  return (
    <div className="col-12">
      <div className="weather-list-header">
        <div className="row">
          <div className="col-12">
            <div className="weather-list-header__city-name">
              {`Погода в ${translit(cityName)}е`}
            </div>
          </div>
          <div className="col-6">
            <div className="weather-list__date">{`${props.date} ${month}`}</div>
          </div>
          <div className="col-6">
            <button
              disabled={props.weather.fetching ? true : false}
              onClick={props.handleRefresh}
              className={props.weather.fetching ?
                'weather-list-header__refresh weather-list-header__refresh--fetching' :
                'weather-list-header__refresh'}
            >
              {props.weather.fetching ? 'Обновление...' : 'Обновить'}
            </button>
          </div>
          <div className="col-12">
            <div className="weather-list-header__lastupdated">
            Обновлено в {props.weather.lastUpdated}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherListHeader.propTypes = {
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  date: PropTypes.number.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default WeatherListHeader;
