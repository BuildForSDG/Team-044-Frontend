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
              <Link to="/dashboard/investor">Investor Dashboard</Link>
            </li>
            <li className="drop-down">
              <Link to="">Account</Link>
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
            </li>
          </ul>
        </nav>
      </div>
    </header>

  </div>
);


export default Wrapper;
