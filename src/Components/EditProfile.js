import React, { useState } from 'react';
import '../styles/Dashboard.css';

const EditProfileForm = () => {
  const [firstName, setFirstName] = useState('Adeyemi');
  const [lastName, setLastName] = useState('Kuti');
  const email = 'YemiKuts@gmail.com';
  const [gender, setGender] = useState('');
  const [genders] = useState([
    { value: 'Male' },
    { value: 'Female' },
  ]);
  const [dob, setDob] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const data = {
    firstName,
    lastName,
    gender,
    dob,
    number,
    address,
    state,
    country,
  };

  const onFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };
  const onLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
  };
  const onGenderChange = (e) => {
    const { value } = e.target;
    setGender(value);
  };
  const onDateChange = (e) => {
    const { value } = e.target;
    setDob(value);
  };
  const onNumberChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };
  const onAddressChange = (e) => {
    const { value } = e.target;
    setAddress(value);
  };
  const onStateChange = (e) => {
    const { value } = e.target;
    setState(value);
  };
  const onCountryChange = (e) => {
    const { value } = e.target;
    setCountry(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // SEND/UPDATE TO BACKEND
  };
  return (
    <div className="info">
      <h2>EDIT MY PROFILE</h2>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="FirstName" className="width">
            First Name
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={onFirstNameChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="LastName" className="width">
            Last Name
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={onLastNameChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="width">
            Email
            <input
              id="email"
              type="email"
              readOnly
              value={email}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Gender" className="width">
            Gender
            <select
              id="gender"
              className="custom-select mb-3"
              value={gender}
              onChange={onGenderChange}
            >
              <option>Gender</option>
              {genders.map(({ value }) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="D.O.B" className="width">
            Date of birth
            <input
              id="dateOfBirth"
              type="date"
              value={dob}
              onChange={onDateChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group ">
          <label htmlFor="Phone Number" className="width">
            Phone Number
            <input
              id="phoneNumber"
              type="text"
              value={number}
              onChange={onNumberChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Address" className="width">
            Address
            <input
              id="address"
              type="text"
              value={address}
              onChange={onAddressChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="State" className="width">
            State/City
            <input
              id="state"
              type="text"
              value={state}
              onChange={onStateChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Country" className="width">
            Country
            <input
              id="country"
              type="text"
              value={country}
              onChange={onCountryChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn">Save</button>
        </div>
      </form>
      <p>{data.firstName}</p>
    </div>
  );
};

export default EditProfileForm;
