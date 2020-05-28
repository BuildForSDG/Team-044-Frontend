import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';

const ChatMessage = ({ text }) => {
  const welcome = useSelector((state) => state.welcomeMessage);
  const [fullData, setFullData] = useState([]);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  };

  // BACKEND CALL
  useEffect(() => {
    axios.get('http://localhost:4000/chat')
      .then((res) => {
        const { data } = res;
        setFullData(data);
      })
      .catch((err) => {
        console.log('error occured', err.message);
      });
  }, []);

  const prevText = usePrevious(text);

  useEffect(() => {
    if (!isEqual(text, prevText)) {
      setFullData([...fullData, text]);
    }
  }, [text, fullData, prevText]);

  return (
    <ScrollToBottom className="messages">
      <p>{welcome}</p>
      <section className="py-3 body">
        <div className="chat-message receive pb-3">
          <div className="message-box backgroundLight">
            <p>Hello, How are you</p>
          </div>
        </div>

        {fullData.map(({ chattext, _id }) => (
          <div key={_id} className="chat-message send">
            <div className="message-box backgroundBlue">
              <p>{chattext}</p>
            </div>
          </div>
        ))}
      </section>
    </ScrollToBottom>
  );
};
ChatMessage.propTypes = {
  text: PropTypes.shape({
    _id: PropTypes.string,
    chattext: PropTypes.string,
  }).isRequired,
};

export default ChatMessage;
