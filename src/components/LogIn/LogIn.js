import React, { useRef } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css';
import '../Home/Product/ProductsCard.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import Footer from '../Footer/Footer';

const LogIn = () => {

    const emailValue = useRef('');
    const passwordValue = useRef('');
    const navigate = useNavigate();
    let location = useLocation();


    //Hook of signInWithEmailAndPassword
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Hook of sendPasswordResetEmail
    const [sendPasswordResetEmail, sending, forgetPasswordError] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";

    let allError;

    //errors with conditonal statement
    if (error || forgetPasswordError) {
        allError = <p className='text-danger'>Error: {error?.message} {forgetPasswordError?.message}</p>
    }

    //loadings
    if (loading || sending) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" id='spinnerr' variant="info" />
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    //Log In
    const loginForm = async event => {
        event.preventDefault();
        const email = emailValue.current.value;
        const password = passwordValue.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://gymequipment-back-end.onrender.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }

    //Forget Password
    const forgetPassword = async () => {
        const email = emailValue.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Email successfully sent!!!');
        }
        else {
            toast('Please enter email');

        }
    }
    return (
        <div>
            <div id='logIn' className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
                <Form onSubmit={loginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailValue} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordValue} type="password" placeholder="Password" />
                    </Form.Group>
                    {allError}
                    <button id='login' className='btn w-100'>Log In</button>
                    <div className="text-center pt-2">
                        <button onClick={forgetPassword} style={{ color: '#5ed9d7' }} className=' btn fw-bold'>Forget password?</button>
                    </div>
                    <p >New to Gym Equipment House? <Link to='/signup' style={{ color: '#5ed9d7' }} className='text-decoration-none fw-bold'>Please Sign Up </Link></p>
                </Form>
                <SocialLogIn></SocialLogIn>
                <ToastContainer ></ToastContainer>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LogIn;