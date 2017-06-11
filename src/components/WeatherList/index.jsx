import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import WeatherItem from './../WeatherItem';
import translit from './../../utils/translit';

class WeatherList extends Component {

  render() {
    const list = this.props.weather.forecast.list;
    const selectedDate = this.props.date;
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
      <div className="weather-list">
        <div className="city-name">{`Погода в ${translit(this.props.weather.forecast.city.name)}е`}</div>
        <div className="weather-list__date">{`${this.props.date} ${month}`}</div>
        {
          list.filter((item) => {
            if (list && selectedDate) {
              const monthDay = new Date(item.dt * 1000).getDate();
              return selectedDate === monthDay;
            }
            return true;
          })
          .map((item) => {
            const date = new Date(item.dt * 1000);

            const hour = date.getHours();

            return (
              <WeatherItem
                key={item.dt - 5} // just for unique key
                hour={hour}
                icon={item.weather[0].icon}
                temp={item.main.temp}
                forecast={item.weather[0].description}
                humidity={item.main.humidity}
                pressure={item.main.pressure}
                wind={item.wind.speed}
              />
            );
          })
        }
      </div>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  date: PropTypes.number,
};

export default WeatherList;
