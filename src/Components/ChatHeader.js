import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const chatee = useSelector((state) => state.chatPerson);

  return (
    <div className="chat-header">
      <div>
        <h3>{chatee}</h3>
      </div>
      <div className="icon">
        <Link to="/dashboard/chat">
          <i className="bx bxs-message-square-x" />
        </Link>
      </div>
    </div>
  );
};

export default ChatHeader;
