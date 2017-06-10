import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import WeatherItem from './../WeatherItem';
import translit from './../../utils/translit';

class WeatherList extends Component {
  render() {
    const list = this.props.weather.forecast.list;

    if (list) {
      return (
        <div className="weather-list">
          <div className="city-name">{translit(this.props.weather.forecast.city.name)}</div>
          {
            list.map((item) => {
              let date = new Date(item.dt * 1000);

              let hour = date.getHours();
              let monthDay = date.getDate();

              return (
                <WeatherItem
                  key={item.dt - 5} // just for unique key
                  monthDay={monthDay}
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
    return null;
  }
}

WeatherList.propTypes = {
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default WeatherList;
