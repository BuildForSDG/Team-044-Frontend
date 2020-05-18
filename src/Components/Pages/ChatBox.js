import React from 'react';
import ChatHeader from '../ChatHeader';
import ChatMessage from '../ChatMessage';
import ChatInput from '../ChatInput';
import '../../styles/Chat.css';

const ChatBox = () => (
  <div className="chat-app">
    <div className="chat-box">
      <ChatHeader />
      <ChatMessage />
      <ChatInput />
    </div>
  </div>
);

export default ChatBox;
