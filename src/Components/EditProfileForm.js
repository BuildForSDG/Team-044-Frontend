import React, { useState } from 'react';
import '../styles/Dashboard.css';


const EditFarmerProfileForm = () => {

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

  const onChangeHandler = (e, handler) => {
    const { value } = e.target;
    handler(value);
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
              onChange={(event) => onChangeHandler(event, setFirstName)}
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
              onChange={(event) => onChangeHandler(event, setLastName)}
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
              onChange={(event) => onChangeHandler(event, setGender)}
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
              onChange={(event) => onChangeHandler(event, setDob)}
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
              onChange={(event) => onChangeHandler(event, setNumber)}
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
              onChange={(event) => onChangeHandler(event, setAddress)}
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
              onChange={(event) => onChangeHandler(event, setState)}
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
              onChange={(event) => onChangeHandler(event, setCountry)}
              className="form-control"
              required
            />
          </label>

        </div>
        <div className="text-center">
          <button type="submit" className="btn">Save</button>
        </div>
      </form>

      {data.firstName}

      <p>{data.firstName}</p>

    </div>
  );
};


export default EditFarmerProfileForm;

export default EditProfileForm;

