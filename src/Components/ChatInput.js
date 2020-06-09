import React from 'react';

const ChatInput = ({ message, setMessage, sendMessage }) => (
  <div className="chat-input">
    <form
      className="form py-3 px-auto"
      onSubmit={(e) => sendMessage(e)}

    >
      <input
        id="text"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control"
        placeholder="type somthing here..."
      />
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

export default ChatInput;
