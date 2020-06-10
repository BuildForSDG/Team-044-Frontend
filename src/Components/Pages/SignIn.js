/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useLocalState from '../../utils/localstorage';
import '../../styles/SignUp-In.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState('');
  const [done, setDone] = useState(false);

  const data = {
    // service,
    email,
    password,
  };
  const [services] = useState([
    { value: 'Farmer' },
    { value: 'Consumer' },
    { value: 'Investor' },
  ]);

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
  };

  const [id, setId] = useLocalState('user-id');



  const onFormSubmit = (e) => {
    e.preventDefault();
    //  SEND TO BACKEND
    axios.post('http://localhost:4000/auth/login', data)
      .then((res) => {
        const tokens = res.data.token;
        const decoded = jwtDecode(tokens);
        setId(decoded.userId);
        setDone(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  return (
    <div className="info">
      {done ? <Redirect to="/" /> : null}

      <h2 className="text-center">Login</h2>
      <p className="text-center">{data.service}</p>
      <form onSubmit={onFormSubmit}>
        <select
          className="custom-select mb-3"
          value={service}
          onChange={(event) => onChangeHandler(event, setService)}
        >
          <option>Choose Service</option>
          {services.map(({ value }) => (
            <option key={value} value={value} id={value}>
              {value}
            </option>
          )) }
        </select>

        <div className="form-group">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-control auth-input"
            value={email}
            onChange={(event) => onChangeHandler(event, setEmail)}
            required
          />
        </div>

        <div className="form-group">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control auth-input"
            onChange={(event) => onChangeHandler(event, setPassword)}
            value={password}
            required
          />
        </div>
        <div className="register-button">
          <button type="submit" className="auth-button btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
