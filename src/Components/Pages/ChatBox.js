/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ChatHeader from '../ChatHeader';
import Messages from '../Messages';
import ChatInput from '../ChatInput';

let socket;
const ChatBox = () => {
  const username = useSelector((state) => state.userLoggedName);
  const chatee = useSelector((state) => state.chatPerson);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:4000';

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { username, chatee }, () => {
    });

    return () => {
      socket.emit('disconnct');
      socket.off();
    };
  }, [ENDPOINT, username, chatee]);


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div>
      <div className="chat-app">
        <div className="chat-box">
          <ChatHeader />
          <Messages
            username={username}
            messages={messages}
          />
          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
      <Link to="/chit">back</Link>
    </div>
  );
};

export default ChatBox;
