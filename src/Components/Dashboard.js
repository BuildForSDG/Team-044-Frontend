import React from 'react';
import '../styles/Dashboard.css';

import SideNavigation from './SideNav';

const Dashboard = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>

      <div className="col-7 col-lg-9">
        <h2>Welcome</h2>
        <div className="row" />
      </div>
    </div>
  </div>
);

export default Dashboard;
