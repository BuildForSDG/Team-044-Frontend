import React from 'react';
import { NavLink } from 'react-router-dom';
import logout from '../utils/logout';

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
              <NavLink to="/dashboard/00">Farmer Dashboard</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/01">Consumer Dashboard</NavLink>
            </li>

            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>

            <li>
              <NavLink to="/" onClick={logout}>Sign Out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>


);

export default Wrapper;
