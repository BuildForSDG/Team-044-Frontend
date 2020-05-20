import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

const SideNavigation = () => (
  <div className="navigation">
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="..."
      className="img-fluid"
    />
    <h4 className="text-center my-4 name">First Name</h4>
    <ul>
      <hr />
      <li>
        <Link to="/dashboard/investor" id="dashboard">Dashboard</Link>
      </li>
      <hr />
      <li>
        <Link to="/dashboard/edit" id="profile">My Profile</Link>
      </li>
      <hr />
      <li>Chats</li>
      <hr />
    </ul>
  </div>
);

export default SideNavigation;
