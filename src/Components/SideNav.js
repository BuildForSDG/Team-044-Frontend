import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

const SideNavigation = () => (
  <div className="navigation">
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"

      alt=".."
      className="img-fluid"
    />
    <h4 className="text-center my-4 name">First Name</h4>
    <ul>
      <hr />
      <li>
        <Link to="/dashboard" id="dashboard">Dashboard</Link>
      </li>
      <hr />
      <li>
        <Link to="/dashboard/edit" id="profile">My Profile</Link>
      </li>
      <hr />
      <li>Chats</li>

      alt=""
      className="img-fluid"
    />
    <h4 className="text-center my-4 name">First Name</h4>
    <ul className="">
      <hr />
      <li>
        <Link to="/dashboard/consumer" id="dashboard">Dashboard</Link>
      </li>
      <hr />
      <li className="">
        <Link to="/dashboard/consumer/edit" id="profile">My Profile</Link>
      </li>
      <hr />
      <li className="">Chats</li>

      <hr />
    </ul>
  </div>
);

export default SideNavigation;
