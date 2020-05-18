import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Products.css';


const Products = () => {
  const showcase = [
    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'one',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'two',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'three',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'four',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'five',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'six',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'seven',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'eight',
    },
  ];
  return (
    <div className="center">
      <h1>Showcase</h1>
      <div className="row mx-3">
        {showcase.map(({
          img, product, price, id,
        }) => (
          <div className="card mb-5 " key={id}>
            <img
              className="img-fluid"
              src={img}
              alt="A product"
            />
            <div className="card-body">
              <div className="grid">
                <p className="card-title">{product}</p>
                <p>{price}</p>
              </div>
              <div className="text-center">
                <Link to="/products/display" className="btn link">Purchase</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
