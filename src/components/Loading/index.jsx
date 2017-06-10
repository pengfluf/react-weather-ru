import React from 'react';

import './index.css';

const Loading = () => (
  <div className="loading">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="loading-spinner"
    >
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        className="bk"
        style={{
          fill: 'rgba(255, 255, 255, 0)',
        }}
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        strokeDasharray="125 126"
        stroke="#000"
        fill="none"
        strokeWidth="20"
        style={{
          stroke: 'rgb(210, 83, 83)',
          strokeWidth: '20',
          strokeDasharray: '163.363, 87.9646',
        }}
      />
    </svg>
  </div>
);

export default Loading;
