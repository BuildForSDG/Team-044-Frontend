import React from 'react';
import FarmProduceForm from '../FarmProduceForm';
import SideNavigation from '../SideNav';

const FarmProduce = () => {

    return(
        <div className='row order' >
            <div className='col-3'>
                <SideNavigation/>
            </div>
            <div className='col-9'>
                <FarmProduceForm />
            </div>
            
        </div>
    )
}

export default FarmProduce;