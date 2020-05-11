import React, { useState } from 'react';

const FarmProduceForm = () => {
    const [produce, setProduce] = useState('')
    const [price, setPrice] = useState('')
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
                    <input type="file" className="custom-file-input" />
                    <label className="custom-file-label" htmlFor="image-upload">Choose file</label>
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' value={price} onChange={onPriceChange} placeholder='Price'/>
                </div>
                <div className='text-center'>
                    <button className='btn'> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FarmProduceForm;