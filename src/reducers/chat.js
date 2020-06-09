const chats = '';

export const room = (state = chats, action) => {
  switch (action.type) {
    case 'USERS':
      return state = action.payload;
    default: return state;
  }
};

export const chatPerson = (state = chats, action) => {
  switch (action.type) {
    case 'CHATEE':
      return state = action.payload;
    default: return state;
  }
};
