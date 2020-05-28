// ACTIONS
export const chatee = (nr) => ({
  type: 'CHATEE',
  payload: nr,
});

export const welcome = (nr) => ({
  type: 'WELCOME',
  payload: nr,
});

export const userLoggedinName = (nr) => ({
  type: 'USERLOGGEDNAME',
  payload: nr,
});

export const userLoggedinId = (nr) => ({
  type: 'USERLOGGEDID',
  payload: nr,
});
