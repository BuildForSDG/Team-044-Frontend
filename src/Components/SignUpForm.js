import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignUp-In.css';

const SignUpForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [service, setService] = useState('');
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const data = {
    firstname,
    lastname,
    email,
    password,
    service,
  };
  const [services] = useState([
    { value: 'Farmer' },
    { value: 'Consumer' },
  ]);

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
  };

  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setWarning('Your passwword must contain at least 6 characters, including 1 special character & 1 number');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.match(/(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/)) {
      axios.post('http://localhost:4000/auth/signup', data)
        .then((res) => {
          console.log(res);
          setDone(true);
        })
        .catch((err) => {
          console.log(err);
        });
      setError('');
    } else {
      setError('Your passwword must contain at least 6 characters, including 1 special character(#,?,!,@,-, etc) & 1 number');
    }
  };
  return (
    <div>
      {done ? <Redirect to="sign-in" /> : null}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            id="firstName"
            type="text"
            placeholder="First-Name"
            className="form-control auth-input"
            value={firstname}
            onChange={(event) => onChangeHandler(event, setFirstName)}
            required
          />
        </div>
        <div className="form-group">
          <input
            id="lastName"
            type="text"
            placeholder="Last-Name"
            className="form-control auth-input"
            value={lastname}
            onChange={(event) => onChangeHandler(event, setLastName)}
            required
          />
        </div>
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
          <p>{warning}</p>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control auth-input"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm-Password"
            className="form-control auth-input"
            value={confirmPassword}
            onChange={(event) => onChangeHandler(event, setConfirmPassword)}
            required
          />
        </div>

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
        <p id="T-C">
          By clicking Register,
          you are indicating that you have read and agree
          to the Terms & Conditions of using this service.
        </p>
        <div className="register-button">
          <button type="submit" className="auth-button btn-block">Register</button>
        </div>
        <p id="error">
          {error}
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
