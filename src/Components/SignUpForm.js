import React, { useState } from 'react';
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
    { value: 'Investor' },
  ]);

  const onFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };
  const onLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
  };
  const onServiceChange = (e) => {
    const { value } = e.target;
    setService(value);
  };
  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setWarning('Your passwword must contain at least 6 characters, including 1 special character & 1 number');
  };
  const onConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.match(/(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/)) {
      //  SEND TO BACKEND
      setError('');
      // PRINT DATA
    } else {
      setError('Your passwword must contain at least 6 characters, including 1 special character(#,?,!,@,-, etc) & 1 number');
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            id="firstName"
            type="text"
            placeholder="First-Name"
            className="form-control"
            value={firstname}
            onChange={onFirstNameChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            id="lastName"
            type="text"
            placeholder="Last-Name"
            className="form-control"
            value={lastname}
            onChange={onLastNameChange}
            required
          />
        </div>
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
          <p>{warning}</p>
        </div>
        <div className="form-group">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm-Password"
            className="form-control"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            required
          />
        </div>

        <select className="custom-select mb-3" value={service} onChange={onServiceChange}>
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
        <div className="button">
          <button type="submit" className="btn btn-block">Register</button>
        </div>
        <p id="error">
          {error}
        </p>
        <p>{data.firstname}</p>
      </form>


    </div>

  );
};

export default SignUpForm;
