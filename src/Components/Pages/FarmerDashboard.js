import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/FarmerDashboard.css';
const FarmerDashboard = () => {

    return (
        <div>
            <h1 className='mt-5 pt-5'>FarmerDashboard</h1>
        

            <h2>Welcome</h2>
            <div className='row'>
                <div className='col-2'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <ul className="nav flex-column">
                        <li className="nav-link">New</li>
                        <li className="nav-link">Report</li>
                        <li className="nav-link">Chats</li>
                        <li className="nav-link">
                            <Link to='/dashboard/edit'> My Profile</Link>
                        </li>
                    </ul>

            </nav>
                </div>
                <div className='col-10'>
                   <div className='row px-auto px-lg-1'  id='order'>
                   <div className="card">
                   <div className="card-body">
                       <img src='' alt='Some Image'className='img-fluid' />
                       <p className="card-text">Messages</p>
                   </div>
               </div>

               <div className="card">
                   <div className="card-body">
                       <img src='' alt='Some Image'className='img-fluid' />
                       <p className="card-text">Farm Produce</p>
                   </div>
               </div>

               <div className="card">
               <div className="card-body">
                   <img src='' alt='Some Image'className='img-fluid' />
                   <p className="card-text">Farm Produce</p>
               </div>
           </div>

           <div className="card">
           <div className="card-body">
               <img src='' alt='Some Image'className='img-fluid' />
               <p className="card-text">Farm Produce</p>
           </div>
       </div>
       <div className="card">
       <div className="card-body">
           <img src='' alt='Some Image'className='img-fluid' />
           <p className="card-text">Farm Produce</p>
       </div>
   </div>
              
                   </div>
                </div>
            </div>
        </div>
        
    )
}

export default FarmerDashboard;

