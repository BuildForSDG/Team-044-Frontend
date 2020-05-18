import React, { useState } from 'react';

const ChatInput = () => {
  const [text, setText] = useState('');

  const onTextChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onChatSubmit = (e) => {
    e.preventDefault();
    // BACKEND CONNECTION
  };
  return (
    <div className="chat-input">
      <form className="form py-3 px-auto" onSubmit={onChatSubmit}>
        <input type="text" value={text} onChange={onTextChange} className="form-control" placeholder="type somthing here..." />
        <div className="button-wrapper">
          <button
            type="submit"
            className="btn"
          >
            <i className="bx bxs-send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
