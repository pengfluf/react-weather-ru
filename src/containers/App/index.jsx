import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';

import * as actionCreators from './../../actions/actionCreators';

import DateList from './../../components/DateList';
import WeatherList from './../../components/WeatherList';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <DateList />
        <WeatherList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.date,
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
