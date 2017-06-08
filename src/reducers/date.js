import { SET_DATE } from './../constants';

const initialState = new Date().getTime();

const date = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default date;
