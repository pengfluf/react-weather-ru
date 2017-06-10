import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

import DateItem from './../DateItem';

class DateList extends Component {

  render() {
    const list = this.props.weather.forecast.list;

    if (list) {
      return (
        <div className="date-list">
          {
            list.map((item) => {
              let date = new Date(item.dt * 1000);

              let weekday = date.getUTCDay();
              let monthday = date.getUTCDate();

              switch (weekday) {
                case 0:
                  weekday = 'ВС';
                  break;
                case 1:
                  weekday = 'ПН';
                  break;
                case 2:
                  weekday = 'ВТ';
                  break;
                case 3:
                  weekday = 'СР';
                  break;
                case 4:
                  weekday = 'ЧТ';
                  break;
                case 5:
                  weekday = 'ПТ';
                  break;
                default:
                  weekday = 'СБ';
                  break;
              }
              return (
                <DateItem
                  key={item.dt}
                  weekday={weekday}
                  monthday={monthday}
                />
              );
            })
          }
        </div>
      );
    }
    return null;
  }
}

DateList.propTypes = {
  weather: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default DateList;
