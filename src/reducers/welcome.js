const welcomeMessage = (state = '', action) => {
  switch (action.type) {
    case 'WELCOME':
      return state = action.payload;
    default: return state;
  }
};

export default welcomeMessage;
