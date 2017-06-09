import React, { Component } from 'react';
import './index.css';

import Date from './../Date';

class DateList extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.props.setDate());
  }

  render() {
    return (
      <div className="date-list">
        <Date handleClick={this.handleClick} />
      </div>
    );
  }
}

export default DateList;
