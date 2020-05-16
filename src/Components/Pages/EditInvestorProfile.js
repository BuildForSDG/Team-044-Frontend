import React from 'react';
import SideNavigation from '../SideNav';
import EditProfileForm from '../EditProfileForm';

const EditInvestorProfile = () => (
  <div>
    <div className="row order">
      <div className="col-5 col-lg-3">
        <SideNavigation />
      </div>

      <div className="col-7 col-lg-9">
        <EditProfileForm />
      </div>
    </div>
  </div>

);

export default EditInvestorProfile;
