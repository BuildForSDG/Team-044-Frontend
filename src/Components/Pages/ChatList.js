import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Chat.css';

const ChatList = () => {
  const chats = true;
  return (
    <div className="mt-5 pt-5 chat-lists">
      {chats
        ? (
          <div>
            <hr />
            <Link to="/dashboard/chat/123">
              <div className="chat-list">
                <i className="bx bxs-user" />
                <p>Adeyemi Kuti</p>
                <p>Something here</p>
              </div>
            </Link>
            <hr />
          </div>
        )
        : <p className="empty">Your chat history is empty</p>}
    </div>
  );
};

export default ChatList;
