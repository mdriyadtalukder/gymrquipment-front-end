import React from 'react';
import './Banner.css'
const Banner = () => {

    return (

        <div className='text-center' id='banner'>
            <div className='banner-child'>
                <p className='text-white fs-3'>STRENGTH EQUIPMENT</p>
                <h1 className='text-white title fw-bold'>Selectorized</h1>
                <p className='text-white fs-3 w-75 mx-auto'>Gym Equipment House Selectorized power equipment are the best for the new resistance trainer, offering you the exercise effectiveness.</p>
                <button className='btn text-white' id='btn'>About us</button>
            </div>

        </div>
    );
};

export default Banner;