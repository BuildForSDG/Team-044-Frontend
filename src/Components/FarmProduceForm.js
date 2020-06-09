import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// CLOUDINARY DETAILS
const URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const FarmProduceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const data = {
    name,
    description,
    price,
    image,
  };
  const onNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onPriceChange = (e) => {
    const { value } = e.target;
    setPrice(value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  const onFileChange = (e) => {
    e.preventDefault();
    // CLOUUDINARY UPLOAD
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    axios.post(URL, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then((image) => {
      setImage(image.data.url);
    }).catch((err) => err);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // SEND TO BACKEND
    if( !name || !description || !image || !price ) {
      setError('Please provide the required information');
    } else {
     axios.post('http://localhost:4000/products', data, {
        headers: {'Content-Type': 'application/json'},
      }).then((res) => {
        console.log('data-->>>', res.data);
      }).catch((err) => {
        console.log('error ---->>>', err.message);
      });
    }
  };
  return (
    <div className="my-5">
      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input id="" type="text" className="form-control" value={name} onChange={onNameChange} placeholder="Name of produce" />
        </div>
        <div className="custom-file my-4">
          <label className="custom-file-label" htmlFor="imageUpload">
            <input id="imageUpload" type="file" className="custom-file-input" onChange={onFileChange} />
          </label>
        </div>
        <div className="form-group">
          <input id="" type="text" className="form-control" value={description} onChange={onDescriptionChange} placeholder="Description" />
        </div>
        <div className="form-group">
          <input id="" type="text" className="form-control" value={price} onChange={onPriceChange} placeholder="Price" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FarmProduceForm;
