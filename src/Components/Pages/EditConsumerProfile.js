import React from 'react';
import SideNavigation from '../SideNav';
import EditProfile from '../EditProfile';

const EditConsumerProfile = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>
      <div className="col-7 col-lg-9">
        <EditProfile />
      </div>
    </div>
  </div>
);

export default EditConsumerProfile;
