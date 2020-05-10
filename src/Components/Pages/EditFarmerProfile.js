import React from 'react';
import EditFarmerProfileForm from '../EditFarmerProfileForm';
import SideNavigation from '../SideNav'

const EditFarmerProfile = () => {
    return (
        <div>
            <div className='row order'>
                <div className='col-3'>
                    <SideNavigation/>
                </div>
                <div className='col-9'>
                    <EditFarmerProfileForm />
                </div>
            </div>
        </div>
    )
}

export default EditFarmerProfile;