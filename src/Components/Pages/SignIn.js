import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../../styles/SignUp-In.css';

const Login = () => {
  const service = useSelector((state) => state.serviceReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    service,
    email,
    password,
  };
  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    //  SEND TO BACKEND
    console.log(data);

    // VERIFY IF PASSWORD MATCH AND USER ALREADY EXISTS
  };

  return (
    <div className="info">
      <h2 className="text-center">Login</h2>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>
        <div className="button">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
