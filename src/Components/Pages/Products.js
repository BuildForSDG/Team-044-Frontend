import React from 'react';
import '../../styles/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const showcase = [
    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'jsnmsc',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'scnkc',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: ' m,cs',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'mkcc',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: '00s9ss',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'd9a999',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'pppcm',
    },

    {
      img: 'https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      product: 'carrot',
      price: '$899.00',
      id: 'den',
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
                <Link to="/products/display" className="btn">Purchase</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
