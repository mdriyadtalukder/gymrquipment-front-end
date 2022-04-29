import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './ProductsCard.css'

const ProductCardId = () => {
    const { productsCardId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-brushlands-76388.herokuapp.com/user/${productsCardId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productsCardId]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <Row className='w-50 mx-auto shadow-lg pt-3 mt-5 mb-5 ' id='avatar'>
            <Col className='pt-3 mt-5 '>
                <div className='text-center'>
                <img src={products?.img} alt="" className='img-fluid' />
                </div>
                <div id='avatar-info' className= "w-50 mx-auto">
                <h4 className=' fw-bold pt-5 '>Name: {products?.name}</h4>
                <p className='pt-3'>Id: {products?._id}</p>
                <p>Quantity: {products?.quantity}</p>
                <p >Supplier Name: {products?.supplierName}</p>
                <h6 className='pb-3'>Price: ${products?.price}</h6>
                <p><span className='fw-bold'>Description:</span> {products?.description}</p>
                </div>
                <div className='text-center mb-3'>
                    <button className='btn button1'>Delivaery</button>
                </div>
            </Col>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span className='text-danger'>This field is required</span>}

               <br /> <input className='button3 mt-1 mb-1' type="submit" />
            </form>
        </Row>
    );
};

export default ProductCardId;