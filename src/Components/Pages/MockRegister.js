import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { userLoggedinName, userLoggedinId } from '../../actions';

const MockRegister = () => {
  const [name, setName] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useDispatch();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const registered = {
    name,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      axios.post('http://localhost:4000/register', registered, {
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        const { data } = res;
        const getName = data.name;
        const { id } = data;
        dispatch(userLoggedinName(getName));
        dispatch(userLoggedinId(id));
        setLoginSuccess(true);
      }).catch((err) => {
        console.log('error', err.message);
      });
      setName('');
    } else {
      alert('You need to pull in your details');
    }
  };

  return (
    <div className="text-center py-5 my-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder="Name"
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
        >
          Submit
        </button>
      </form>
      {loginSuccess && <Redirect to="/mockchatlist" /> }
    </div>
  );
};

export default MockRegister;
