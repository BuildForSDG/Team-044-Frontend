import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Products.css';
import ProductsImageSlide from '../ProductsImageSlide';

const ProductsDisplay = () => (
  <div className="text-center">
    <h3 className="mt-5 pt-5">Display</h3>
    <ProductsImageSlide />
    <p>Product Description</p>
    <div className="payment">Payment Methods</div>
    <div>Chat with the Farmer</div>
    <Link to="/products">Go Back</Link>
  </div>
);

export default ProductsDisplay;
