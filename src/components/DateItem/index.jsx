import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Date = props => (
  <div className="date-item">
    <div className="date-item__weekday">{props.weekday}</div>
    <div className="date-item__monthday">{props.monthday}</div>
  </div>
);

Date.propTypes = {
  weekday: PropTypes.number,
  monthday: PropTypes.number,
};

export default Date;
