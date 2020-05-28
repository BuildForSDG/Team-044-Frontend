import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import '../styles/Chat.css';

const Messages = ({ messages, username }) => (
  <ScrollToBottom className="messages">
    <section className="py-3 body">
      {messages.map((message, i) => ( 
        <div key={i}><Message message={message} username={username} /></div>
      ))}
    </section>
  </ScrollToBottom>
);


export default Messages;
