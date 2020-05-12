import React from 'react';
import { Link } from 'react-router-dom';


const ChatHeader = () => (
  <div className="chat-header">
    <div>
      <h3>Adeyemi Kuti</h3>
    </div>
    <div className="icon">
      <Link to="/dashboard/chat">
        <i className="bx bxs-message-square-x" />
      </Link>

    </div>
  </div>
);
export default ChatHeader;
