import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqby from 'lodash.uniqby';

import './index.css';

import DateItem from './../DateItem';

class DateList extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const monthDay = +event.target.innerHTML;
    this.props.selectDate(monthDay);
    // the same but with Date
    // const msc = new Date().setDate(monthDay);
    // const date = new Date(msc).getDate();
    // this.props.selectDate(date);
  }

  render() {
    const list = this.props.weather.forecast.list;

    if (list) {
      return (
        <div className="date-list">
          {
            uniqby(list, (item) => {
              const date = new Date(item.dt * 1000);
              const monthDay = date.getDate();
              return monthDay;
            })
            .map((item) => {
              let date = new Date(item.dt * 1000);

              let weekDay = date.getDay();
              let monthDay = date.getDate();

              switch (weekDay) {
                case 0:
                  weekDay = 'ВС';
                  break;
                case 1:
                  weekDay = 'ПН';
                  break;
                case 2:
                  weekDay = 'ВТ';
                  break;
                case 3:
                  weekDay = 'СР';
                  break;
                case 4:
                  weekDay = 'ЧТ';
                  break;
                case 5:
                  weekDay = 'ПТ';
                  break;
                default:
                  weekDay = 'СБ';
                  break;
              }
              return (
                <DateItem
                  key={item.dt}
                  weekDay={weekDay}
                  monthDay={monthDay}
                  handleClick={this.handleClick}
                  date={this.props.date}
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
  weather: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  selectDate: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
};

export default DateList;
