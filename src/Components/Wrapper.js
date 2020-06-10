

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Wrapper = () => (
  <div>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto">
          <NavLink to="index.html">Team-044 Product</NavLink>
        </h1>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">Farmer Dashboard</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/consumer">Consumer Dashboard</NavLink>
            </li>
  
                <li>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-in">Sign In</NavLink>
                </li>
                
              <li>
              <NavLink to="/">Sign Out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default Wrapper;
