import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.css'

const ProductsCard = ({ item, children, deleteItem }) => {
    const { _id, img, name, description, price, quantity, supplierName } = item;
    const deleteItems = id => {

        const proceed = window.confirm("Are you sure to delete this item?");
        if (proceed) {
            fetch(`https://tranquil-brushlands-76388.herokuapp.com/user/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    deleteItem(_id);
                })
        }

    }
    return (
        <div className='col mb-4'>
            <div id='cards' className='card h-100 shadow rouded'>
                <div id='card-img' className='card-body titles pb-5'>
                    <img src={img} className='img-fluid' alt="" />
                    <h4  className=' fw-bold pt-5 '>{name}</h4>
                    <p  className='pt-3'>Quantity: {quantity}</p>
                    <p >Supplier Name: {supplierName}</p>
                    <h6 className='pb-3'>Price: ${price}</h6>
                    <p>Description: {description}</p>
                </div>
                {!children ? <>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/products/${_id}`} className='btn button1 rounded-pill pt-2 pb-2 ps-4 pe-4'>Update</Link>
                        <button onClick={() => deleteItems(_id)} className='btn button2 rounded-pill pt-2 pb-2 ps-4 pe-4'>Delete</button>
                    </div>
                </> : <Link to={`/products/${_id}`} className='btn button1 rounded-pill pt-2 pb-2 ps-4 pe-4'>Update</Link>}
            </div>
        </div >

    );
};

export default ProductsCard;