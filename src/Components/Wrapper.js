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
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
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

export default Wrapper;
