import React from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from '../SideNav';
import '../../styles/Dashboard.css';

const FarmerDashboard = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>
      <div className="col-7 col-lg-9">
        <h2>Welcome</h2>
        <p className="text-center">You have not added any farm produce</p>
        <p className="text-center">
          To add farm produce,
          <Link className="ml-2 link" to="/dashboard/products">Click here</Link>
        </p>
      </div>
    </div>
  </div>
);

export default FarmerDashboard;
