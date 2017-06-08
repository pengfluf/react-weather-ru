import React, { Component } from 'react';
import './index.css';

import Date from './../Date';

class DateList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="date-list">
        <Date date={this.props.date}/>
      </div>
    );
  }
}

export default DateList;
