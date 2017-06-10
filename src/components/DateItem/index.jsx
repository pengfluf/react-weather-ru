import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const DateItem = props => (
  <div className="date-item">
    <div className="date-item__weekday">{props.weekday}</div>
    <div className="date-item__monthday">{props.monthday}</div>
  </div>
);

DateItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  monthday: PropTypes.number.isRequired,
};

export default DateItem;
