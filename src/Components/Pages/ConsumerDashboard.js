import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';

import SideNavigation from '../SideNav';

const ConsumerDashboard = () => (

  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>

      <div className="col-7 col-lg-9">
        <h2>Welcome</h2>
        <p className="text-center">You have not made any purchase</p>
        <p className="text-center">
          To view farm produce,
          <Link to="/products" className="ml-2">Click Here</Link>
        </p>
      </div>
    </div>
  </div>

);


export default ConsumerDashboard;
