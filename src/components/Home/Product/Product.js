import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import ProductsCard from './ProductsCard';

const Product = () => {
    const [itemss, setItems] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('https://gymequipment-back-end.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setloading(false);
            })
    }, [itemss]);

    //Delete items function
    const deleteItem = id => {
        const remaining = itemss.filter(item => item._id !== id);
        setItems(remaining);
    }
    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="border" variant="info" />
            </div> :
                <div>
                    <div className='container'>
                        <Link to='/additems' className='btn button3'>Add New Items</Link>
                        <h1 className='text-center fw-bold'>All Gym Equipment Items</h1>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                            {
                                itemss.map(item => <ProductsCard deleteItem={deleteItem} key={item._id} item={item}></ProductsCard>)
                            }
                        </div>

                    </div>
                    <Footer></Footer>
                </div>}


        </>
    );
};

export default Product;