const initialState = {
  service: '',
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SERVICE':
      return { ...state, service: action.payload };
    default:
      return state;
  }
};

export default serviceReducer;
