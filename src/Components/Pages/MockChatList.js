import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { chatee } from '../../actions';
import '../../styles/Chat.css';

const MockChatList = () => {
  const username = useSelector((state) => state.userLoggedName);
  const dispatch = useDispatch();

  const chats = true;
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/chatlist')
      .then((res) => {
        const { data } = res;
        setFullData(data);
      })
      .catch((err) => {
        console.log('error-->>', err.message);
      });
  }, []);

  return (
    <div className="mt-5 pt-5 chat-lists">
      <h1>list</h1>
      {chats
        ? (
          <div>
            {fullData.map(({ chatlist, _id }) => (
              <div key={_id}>
                <hr />
                <Link
                  to={`/dashboard/chat/${username.toLocaleLowerCase()}/${chatlist.toLowerCase()}`}
                  onClick={() => dispatch(chatee(chatlist))}
                >
                  <div className="chat-list">
                    <i className="bx bxs-user" />
                    <p>
                      {chatlist}
                    </p>
                    <p>Something here</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )
        : <p className="empty">Your chat history is empty</p>}
    </div>
  );
};

export default MockChatList;
