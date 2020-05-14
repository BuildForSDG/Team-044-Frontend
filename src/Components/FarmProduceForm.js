import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// CLOUDINARY DETAILS
const URL = process.env.REACT_APP_CLOUDINARY_URL;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const FarmProduceForm = () => {
  const [produce, setProduce] = useState('');
  const [price, setPrice] = useState('');
  const [imageUpload, setImageUpload] = useState('');
  const data = {
    produce,
    price,
  };
  const onProduceChange = (e) => {
    const { value } = e.target;
    setProduce(value);
  };

  const onPriceChange = (e) => {
    const { value } = e.target;
    setPrice(value);
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
      console.log('image-->>>', image);
      setImageUpload(image.data.url);
    }).catch((error) => {
      console.log('error--->', error.message);
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="my-5">
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" value={produce} onChange={onProduceChange} placeholder="Name of produce" />
        </div>
        <div className="custom-file my-4">
          <label className="custom-file-label" htmlFor="imageUpload">
            <input id="imageUpload" type="file" className="custom-file-input" onChange={onFileChange} />
          </label>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" value={price} onChange={onPriceChange} placeholder="Price" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn"> Submit</button>
        </div>
      </form>
      <img src={imageUpload} alt="" className="img-fluid" />
    </div>
  );
};

export default FarmProduceForm;
