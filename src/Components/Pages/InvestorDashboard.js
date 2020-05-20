import React from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from '../SideNav';
import '../../styles/Dashboard.css';

const InvestorDashboard = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>
      <div className="col-7 col-lg-9">
        <h2>Welcome</h2>
        <p className="text-center">You have not made any investments</p>
        <Link to="/" className="text-center link">View farmers</Link>
      </div>
    </div>
  </div>
);

export default InvestorDashboard;
