import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';
import './index.css';

import DateList from './../DateList';
import WeatherList from './../WeatherList';

const App = () => (
  <div className="app">
    <DateList />
    <WeatherList />
  </div>
);

const mapStateToProps = state => ({
  date: state.date,
});

const mapDispatchToProps = dispatch => ({
  actionCreators: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
