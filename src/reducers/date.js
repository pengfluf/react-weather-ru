import { SET_DATE } from './../constants';

const initialState = 0;

const date = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
};

export default date;
