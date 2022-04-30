import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.css'

const ProductsCard = ({ item, children }) => {
    const { _id, img, name, description, price, quantity, supplierName } = item;
    return (
        <div className='col mb-4'>
            <div className='card h-100 shadow rouded'>
                <div id='card-img' className='card-body titles pb-5'>
                    <img src={img} className='img-fluid' alt="" />
                    <h4 className=' fw-bold pt-5 '>Name: {name}</h4>
                    <p className='pt-3'>Quantity: {quantity}</p>
                    <p >Supplier Name: {supplierName}</p>
                    <h6 className='pb-3'>Price: ${price}</h6>
                    <p><span className='fw-bold'>Description:</span> {description}</p>
                </div>
                {!children ? <Link to='/checkout' className='btn button2 rounded-pill pt-2 pb-2 ps-4 pe-4'>Delete</Link> : <Link to={`/products/${_id}`} className='btn button1 rounded-pill pt-2 pb-2 ps-4 pe-4'>Update</Link>}
            </div>
        </div >

    );
};

export default ProductsCard;