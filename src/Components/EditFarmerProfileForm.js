import React, { useState } from 'react'

import '../styles/FarmerDashboard.css'


const EditFarmerProfileForm = () => {
    const [firstName, setFirstName] = useState('Adeyemi')
    const [lastName, setLastName] = useState('Kuti')
    const email = 'YemiKuts@gmail.com'
    const [gender, setGender] = useState('')
    const [genders] = useState([
        { value: 'Male' },
        { value: 'Female' }
      ])
    const [dob, setDob] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const data = {
        firstName,
        lastName,
        gender,
        dob,
        number,
        address,
        state,
        country
    }

    const onFirstNameChange = (e) => {
        const value = e.target.value
        setFirstName(value)
    }
    const OnLastNameChange = (e) => {
        const value = e.target.value
        setLastName(value)
    }
    const onGenderChange = (e) => {
        const value = e.target.value
        setGender(value)
    }
    const onDateChange = (e) => {
        const value = e.target.value
        setDob(value)
    }
    const onNumberChange = (e) => {
        const value = e.target.value
        setNumber(value)
    }
    const onAddressChange = (e) => {
        const value = e.target.value
        setAddress(value)
    }
    const onStateChange = (e) => {
        const value = e.target.value
        setState(value)
    }
    const onCountryChange = (e) => {
        const value = e.target.value
        setCountry(value)
    }
    const onFormSubmit = (e) => {
        console.log(data)
        // SEND/UPDATE TO BACKEND
        alert('Your Profile has been updated')
    }
    return (
        <div className='info'>
            <h2>EDIT MY PROFILE</h2>
            <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input
                    id='firstName'
                    type="text"
                    value={firstName} 
                    onChange={onFirstNameChange} 
                    className="form-control" 
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input
                    id='lastName' 
                    type="text" 
                    value = {lastName}
                    onChange={OnLastNameChange} 
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input 
                    id='email'
                    type="email" 
                    readOnly
                    value= {email} 
                    className="form-control"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="Gender">Gender</label>
                <select 
                    id='gender'
                    className="custom-select mb-3" 
                    value={gender} 
                    onChange={onGenderChange}>
                        <option>Gender</option>
                        {genders.map(({value}) => (
                            <option  key={value} value={value} > {value} </option>
                        )) }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="D.O.B">Date of birth</label>
                <input 
                    id='dateOfBirth'
                    type="date" 
                    value={dob}
                    onChange={onDateChange} 
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group ">
                <label htmlFor="Phone Number">Phone Number</label>
                <input 
                    id='phoneNumber'
                    type="text" 
                    value={number} 
                    onChange={onNumberChange} 
                    className="form-control"
                    required  
                />
            </div>   
            <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input 
                    id='address'
                    type="text" 
                    value={address} 
                    onChange={onAddressChange} 
                    className="form-control"
                    required  
                />
            </div>
            <div className="form-group">
                <label htmlFor="State">State/City</label>
                <input
                    id='state'
                    type="text" 
                    value={state} 
                    onChange={onStateChange} 
                    className="form-control"
                    required  
                />
            </div>
            <div className="form-group">
                <label htmlFor="Country">Country</label>
                <input 
                    id='country'
                    type="text" 
                    value={country} 
                    onChange={onCountryChange} 
                    className="form-control"
                    required  
                />
            </div>
            <div className='text-center'>
                <button className='btn'>Save</button>
            </div>
        </form>
        </div>
    )
}

export default EditFarmerProfileForm;