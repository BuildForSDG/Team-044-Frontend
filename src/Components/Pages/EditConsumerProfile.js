import React from 'react';
import SideNavigation from '../SideNav';
import EditProfileForm from '../EditProfile';

const EditConsumerProfile = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3 side">
        <SideNavigation />
      </div>
      <div className="col-7 col-lg-9 main">
        <EditProfileForm />
      </div>
    </div>
  </div>
);

export default EditConsumerProfile;
