import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './ProductsCard.css';

const ProductCardId = () => {
    const { productsCardId } = useParams();
    const quantities = useRef('');
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [reload, setReload] = useState(false);

    //Get items by id
    useEffect(() => {
        setloading(true)
        fetch(`https://tranquil-brushlands-76388.herokuapp.com/user/${productsCardId}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setloading(false)
            });
    }, [productsCardId, reload]);


    //add quantity
    const updateUser = event => {
        event.preventDefault();
        const quantiti = quantities.current.value;
        const quantity = parseInt(quantiti) + products?.quantity;
        const updateUser = { quantity };
        if (isNaN(quantity) || quantity <= 0) {
            alert('Enter valid number')
        }
        else {
            fetch(`https://tranquil-brushlands-76388.herokuapp.com/user/${productsCardId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateUser),
            })
                .then(response => response.json())
                .then(data => {
                    window.confirm('Are you sure to add quantity ?')
                    event.target.reset();
                    setReload(!reload);
                })
        }
    }

    //Delivery
    const updateQuantity = event => {
        const quantity = (products?.quantity) - 1;
        const updateUser = { quantity };
        fetch(`https://tranquil-brushlands-76388.herokuapp.com/user/${productsCardId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                window.confirm('Are you sure to deliver this item?');
                setReload(!reload);
            })
    }

    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="border" variant="info" />
            </div> :
                <div>
                    <div className='container'>
                        <Row >
                            <div className='w-75 mx-auto shadow-lg pt-3 mt-5 mb-5 ' id='avatar'>
                                <Col className='pt-3 mt-5 '>
                                    <div className='text-center'>
                                        <img src={products?.img} alt="" className='img-fluid' />
                                    </div>
                                    <div id='avatar-info' className="w-50 mx-auto">
                                        <h4 className=' fw-bold pt-5 '>{products?.name}</h4>
                                        <p className='pt-3'>Id: {products?._id}</p>
                                        <p>Quantity: {products?.quantity}</p>
                                        <p >Supplier Name: {products?.supplierName}</p>
                                        <h6 className='pb-3'>Price: ${products?.price}</h6>
                                        <p><span className='fw-bold'>Description:</span> {products?.description}</p>
                                    </div>
                                    <div className='text-center mb-3'>
                                        <button onClick={updateQuantity} className='btn button1'>Delivaered</button>
                                    </div>
                                </Col>
                                <Form onSubmit={updateUser} className='w-75 mx-auto'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email Quantity</Form.Label>
                                        <Form.Control ref={quantities} type="text" placeholder="Enter Quantity" />
                                    </Form.Group>
                                    <div className='text-center pt-2 pb-2'>
                                        <button className='btn button3'>Submit</button>
                                    </div>
                                </Form>
                            </div>
                            <div className='text-center container'>
                                <Link to='/products' className='btn button3 mb-2'>Manage Inventories <i class="fas fa-arrow-right"></i></Link>
                            </div>
                        </Row>
                    </div>
                    <Footer></Footer>
                </div>}
        </>

    );
};

export default ProductCardId;