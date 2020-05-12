import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

const ChatMessage = () => (
  <ScrollToBottom className="messages">
    <div className="py-3 body">
      <div className="chat-message receive pb-3">
        <div className="message-box backgroundLight">
          <p>Hello, How are you</p>
        </div>
      </div>
      <div className="chat-message send">
        <div className="message-box backgroundBlue ">
          <p>I am fine</p>
        </div>
      </div>
      <div className="chat-message send pb-3">
        <div className="message-box backgroundBlue ">
          <p>Are the plantains ripe?</p>
        </div>
      </div>
      <div className="chat-message receive">
        <div className="message-box backgroundLight">
          <p>Yes, You can make payments now</p>
        </div>
      </div>
    </div>

  </ScrollToBottom>
);

export default ChatMessage;
