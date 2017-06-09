import React from 'react';

import './index.css';

const Date = (props) => (
  <div onClick={props.handleClick} className="date-item">
    Hello there I'm Date
  </div>
);

export default Date;
