import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'normalize.css';
import './index.css';

import * as actionCreators from './../../actions/actionCreators';

import DateList from './../../components/DateList';
import WeatherList from './../../components/WeatherList';
import Loading from './../../components/Loading';

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchWeather()
    .then(
      (response) => {
        let date = new Date(response.forecast.list[0].dt * 1000).getDate();
        this.props.actions.selectDate(date);
      });
  }

  render() {
    const list = this.props.weather.forecast.list;

    if (list) {
      return (
        <div className="app">
          <DateList
            weather={this.props.weather}
            date={this.props.date}
            selectDate={this.props.actions.selectDate}
          />
          <WeatherList
            weather={this.props.weather}
            date={this.props.date}
          />
        </div>
      );
    }

    return (
      <Loading />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  date: state.date,
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
