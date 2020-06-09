import React from 'react';
import EditFarmerProfileForm from '../EditProfileForm';
import SideNavigation from '../SideNav';

const EditFarmerProfile = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3 side">
        <SideNavigation />
      </div>
      <div className="col-7 col-lg-9 main">
        <EditFarmerProfileForm />
      </div>
    </div>
  </div>
);

export default EditFarmerProfile;
