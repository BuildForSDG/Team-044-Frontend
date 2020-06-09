const userLog = '';

export const userLoggedName = (state = userLog, action) => {
  switch (action.type) {
    case 'USERLOGGEDNAME':
      return state = action.payload;
    default: return state;
  }
};

export const userLoggedId = (state = userLog, action) => {
  switch (action.type) {
    case 'USERLOGGEDID':
      return state = action.payload;
    default: return state;
  }
};
