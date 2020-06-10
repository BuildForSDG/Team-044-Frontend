import { useState } from 'react';

// SAVE ID
const useLocalState = (localItem) => {
  const [loc, setState] = useState(localStorage.getItem(localItem));

  const setLoc = (newItem) => {
    localStorage.setItem(localItem, newItem);
    setState(newItem);
  };
  return [loc, setLoc];
};

export default useLocalState;