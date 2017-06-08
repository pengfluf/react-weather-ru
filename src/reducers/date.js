const initialState = {
  date: new Date().getTime(),
};

const date = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default date;
