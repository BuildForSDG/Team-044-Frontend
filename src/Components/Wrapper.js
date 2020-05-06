import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import { service } from '../actions'
import { Link } from "react-router-dom";

const Wrapper = () => {

const dispatch = useDispatch();
  const [services] = useState([
    { value: 'Farmer' },
    { value: 'Consumer' },
    { value: 'Investor' }
  ])

 const onLinkClick = (e) => {
  const value = e.target.name;
  dispatch(service(value))
 }
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <Link to="">Team-044 Product</Link>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>
                <li className="drop-down">
                  <Link to="">Sign In</Link>
                  <ul>
                    {services.map(({value}) => (
                      <li key={value}>
                        <Link to='/sign-in' name={value} onClick={onLinkClick} > {value} </Link>
                      </li>
                    )) } 
                    </ul>
                  
                </li>
                    
                  
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }

export default Wrapper;
