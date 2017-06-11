import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import WeatherListHeader from './../WeatherListHeader';
import WeatherItem from './../WeatherItem';


class WeatherList extends Component {
  constructor() {
    super();

    this.handleRefresh = this.handleRefresh.bind(this);
  }


  handleRefresh(event) {
    event.preventDefault();
    this.props.fetchWeather();
  }

  render() {
    const list = this.props.weather.forecast.list;
    const selectedDate = this.props.date;

    return (
      <div className="weather-list">
        <div className="row">
          <WeatherListHeader
            weather={this.props.weather}
            date={this.props.date}
            handleRefresh={this.handleRefresh}
          />
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
      </div>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  date: PropTypes.number,
  fetchWeather: PropTypes.func.isRequired,
};

export default WeatherList;
