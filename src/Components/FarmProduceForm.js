import React, { useState } from 'react';
import axios from 'axios';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ekiira/image/upload';

const CLOUDINARY_UPLOAD_PRESET = 'jbk6xkqw';

const FarmProduceForm = () => {
    const [produce, setProduce] = useState('')
    const [price, setPrice] = useState('')
    const [imageUpload, setImageUpload] = useState('')
const data = {
    produce,
    price
}
    const onProduceChange = (e) => {
        const value = e.target.value
        setProduce(value)
    }

    const onPriceChange = (e) => {
        const value = e.target.value
        setPrice(value)
    }
    const onFileChange = (e) => {
        e.preventDefault();
        // CLOUUDINARY UPLOAD
        const file = e.target.files[0]
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        axios.post(CLOUDINARY_URL, formData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((image) => {
            console.log('image-->>>', image);
            setImageUpload(image.data.url);
        }).catch(error => {
            console.log('error--->', error.message);
        })

    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className='my-5'>
            <form onSubmit={onFormSubmit}>
                <div className='form-group'>
                    <input type='text' className='form-control' value={produce} onChange={onProduceChange} placeholder='Name of produce' />
                </div>
                <div className="custom-file my-4">
                    <input type="file" className="custom-file-input" onChange={onFileChange}/>
                    <label className="custom-file-label" htmlFor="image-upload">Choose file</label>
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' value={price} onChange={onPriceChange} placeholder='Price'/>
                </div>
                <div className='text-center'>
                    <button className='btn'> Submit</button>
                </div>
            </form>
            <img src={imageUpload} alt=''/>
        </div>
    )
}

export default FarmProduceForm;