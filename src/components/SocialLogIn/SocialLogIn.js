import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SocialLogin.css';
import googleLogo from '../../images/google.webp'
import githubLogo from '../../images/github.png'

const SocialLogIn = () => {
    const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubloading] = useSignInWithGithub(auth);
    if (loading || githubloading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>
    }
    return (
        <div className='conainer '>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <button className='btn text-center w-100 bg-light fw-bold socialLogin' onClick={() => signInWithGoogle()}> <img width='30px' src={googleLogo} alt="" /> Sign In With Google</button><br />
            <button className='btn text-center socialLogin w-100 bg-light fw-bold  mt-2' onClick={() => signInWithGithub()}> <img width='20px' src={githubLogo} alt="" /> Sign In With GitHub</button>

        </div>
    );
};


export default SocialLogIn;