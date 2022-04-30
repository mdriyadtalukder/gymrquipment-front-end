import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Additems = () => {
    const [user] = useAuthState(auth);
    const namevalue = useRef('');
    const imgvalue = useRef('');
    const descriptionvalue = useRef('');
    const pricevalue = useRef('');
    const quantityvalue = useRef('');
    const suppliervalue = useRef('');
    const [reload, setReload] = useState(false);
    const addItem = event => {
        event.preventDefault();
        const name = namevalue.current.value;
        const img = imgvalue.current.value;
        const description = descriptionvalue.current.value;
        const price = pricevalue.current.value;
        const quantity = quantityvalue.current.value;
        const supplierName = suppliervalue.current.value;

        const order = {
            email: user?.email,
            name: name,
            img: img,
            description: description,
            price: price,
            quantity: quantity,
            supplierName: supplierName

        }


        if (name && img && description && price && quantity && supplierName) {
            fetch('https://tranquil-brushlands-76388.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            }, [reload])
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    toast('item successfully added!!!');
                    event.target.reset();
                    setReload(!reload);
                })
        }
        else {
            toast('Please enter the all input field')
        }
    }
    return (
        <div className='mt-3 mb-3'>
            <h1 className='text-center fw-bold'>Add New Items</h1>
            <Form onSubmit={addItem} className='w-50 mx-auto shadow-lg p-5 mt-3 mb-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly type="email" value={user?.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control ref={namevalue} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Item Image</Form.Label>
                    <Form.Control ref={imgvalue} type="text" placeholder="Enter Image Link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control ref={descriptionvalue} type="text" placeholder="Enter Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label> Item Price</Form.Label>
                    <Form.Control ref={pricevalue} type="text" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label> Item Quantity</Form.Label>
                    <Form.Control ref={quantityvalue} type="text" placeholder="Enter Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control ref={suppliervalue} type="text" placeholder="Enter Supplier Name" />
                </Form.Group>

                <button className='btn button3 w-100'>Add Item</button>
            </Form>
            <ToastContainer ></ToastContainer>
        </div>
    );
};

export default Additems;