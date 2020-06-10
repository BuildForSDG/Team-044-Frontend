/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import axios from 'axios';
// import Loader from '../LoaderIcon';
import useLocalState from '../../utils/localstorage';

import '../../styles/Products.css';

const Products = () => {
  const [fullData, setFullData] = useState(null);
  const [linkId, setLinkId] = useState(false);
const [id, setId] = useLocalState('product-id');


  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        const { data } = response;
        setFullData(data);
      })
      .catch((error) => {
        console.log('error ---->>>', error.message);
      });
  }, []);

  return (
    <div className="main-wrapper">
        <div className="center">
          <div className="row">
            {fullData.map(({
              image, name, price, _id,
            }) => (

              <div
                key={_id}
                className="col-6 col-lg-3 py-4 px-2.5"
              >
                <Link
                  to={`/products/display/${_id}`}
                  onClick={() => {
                    setId(_id);
                    setLinkId(true);
                  }}
                >
                  <div>
                    <img
                      className="img-fluid"
                      src={image[0]}
                      alt="A product"
                    />
                  </div>
                  <div className="grid">
                    <p>{name}</p>
                    <p>{price}</p>
                  </div>
                </Link>

              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default Products;
