import React from 'react';
import '../styles/Chat.css';

const Message = ({ message: { user, text }, username }) => {
  let isSentByCurrentUser = false;
  const trimmedUsername = username.trim().toLowerCase();
  if (user === trimmedUsername) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      { isSentByCurrentUser
        ? (
          <div className="chat-message send">
            <div className="message-box backgroundBlue">
              <p>{text}</p>
            </div>
            <p className="sentText">{trimmedUsername }</p>
          </div>
        )
        : (
          <div className="chat-message receive pb-3">
            <div className="message-box backgroundBlue">
              <p>{text}</p>
            </div>
            <p className="sentText">{user}</p>
          </div>
        )}
    </div>
  );
};


export default Message;
