import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';
import './index.css';

import DateList from './../DateList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DateList date={this.props.date}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.date,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
