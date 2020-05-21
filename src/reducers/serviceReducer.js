const initialState = {
  service: '',
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SERVICE': {
      const newState = { ...state, service: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default serviceReducer;
