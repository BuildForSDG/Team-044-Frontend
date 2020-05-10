import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

 const SideNavigation = () =>  (
            <div className="navigation">
                <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                alt=''
                className='img-fluid' />
                <h4 className='text-center my-4'>First Name</h4>
                <ul className="">
                <hr/>
                    <li>
                        <Link to='/dashboard'>My dashboard</Link>
                    </li>
                <hr/>
                    <li className="">
                        <Link to='/dashboard/edit'> My Profile</Link>
                    </li>
   
                <hr/>
                    <li>
                        <Link to='/dashboard/products'>New</Link>
                    </li>
                    
                <hr/>
                    <li className="">Chats</li>
                <hr/>
                </ul>

    </div>
     );
 

 export default SideNavigation;