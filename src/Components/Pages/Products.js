/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader';
import axios from 'axios';

import '../../styles/Products.css';

const Products = () => {
  const [fullData, setFullData] = useState(null);
  const [linkId, setLinkId] = useState(false);
  const [id, setId] = useState('');
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        const { data } = response;
        console.log('sdmd', data);
        setFullData(data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log('error ---->>>', error.message);
      });
  }, []);

  console.log(fullData, 'yfm,de');

  return (
    <div className="main-wrapper">

      {loaded ? (
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
      ) : <Loader loaded={loaded} className="product-loader" /> }

    </div>
  );
};

export default Products;


// <p>hgnbcbn</p>
