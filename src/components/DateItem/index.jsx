import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const DateItem = props => (
  <div className="date-item">
    <div className="date-item__weekday">{props.weekDay}</div>
    <div className="date-item__monthday">{props.monthDay}</div>
  </div>
);

DateItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  monthDay: PropTypes.number.isRequired,
};

export default DateItem;
