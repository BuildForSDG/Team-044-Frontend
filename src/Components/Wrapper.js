

import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = () => (
  <div>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto">
          <Link to="index.html">Team-044 Product</Link>
        </h1>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/mockregister">Register</Link>


            <li className="services">

            <li>

              <Link to="/services">Services</Link>

            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/dashboard/chat">Chat</Link>
            </li>

            <li className="drop-down">
              <Link to="/">Account</Link>
              <ul>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
                <li className="drop-down">
                  <Link to="/">Sign In</Link>
                  <ul>
                    <li>
                      <Link to="/">Investor</Link>
                    </li>
                    <li>
                      <Link to="/">Farmer</Link>
                    </li>
                    <li>
                      <Link to="/">Customers</Link>
                    </li>
                  </ul>
                </li>
              </ul>

            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Sign In</Link>


            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import service from '../actions';

const Wrapper = () => {
  const dispatch = useDispatch();
  const [services] = useState([
    { value: 'Farmer' },
    { value: 'Consumer' },
    { value: 'Investor' },
  ]);

  const onLinkClick = (e) => {
    const value = e.target.name;
    dispatch(service(value));
  };

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">Team-044 Product</Link>
          </h1>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li className="drop-down">
                <Link to="/">Sign In</Link>
                <ul>
                  {services.map(({ value }) => (
                    <li key={value}>
                      <Link to="/sign-in" name={value} onClick={onLinkClick}>
                        {value}
                      </Link>
                    </li>
                  )) }
                </ul>
              </li>
              <li>
                <Link to="/">Sign Out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};



export default Wrapper;
