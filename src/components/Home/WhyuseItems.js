import React from 'react';
import img from '../../images/Selectorized-1.jpg';
import img2 from '../../images/Selectorized-2.jpg';

const WhyuseItems = () => {
    return (
        <div className='container mt-5 pt-5'>
            <h1 className='text-center fw-bold mb-4'> Why Choose Gym Equipment House Selectorized Equipment</h1>
            <p className=' text-center fs-3'>Build tO be functional and effective</p>
            <div id='containers' className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-5 pt-4 pb-4'>
                <div className='col mb-4 d-flex justify-content-center align-items-center'>
                    <div className='pe-lg-4'>
                        <h2 className='text-center'>Easy to use</h2>
                        <p className='pt-4'>
                            Simply adjust, easily exercise are the speciality of selectorized machines. Choose how much weight you wish to lift by inserting a key into the desired weight stack. Only taking a matter of seconds, you can simply adjusting weights on a selectorized power equipment.</p>
                    </div>
                </div >
                <div className='col mb-4'>
                    <img src={img} className='img-fluid' alt="" />
                </div >
            </div>
            <div id='containers' className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className='col mb-4'>
                    <img src={img2} className='img-fluid' alt="" />
                </div >
                <div className='col mb-4 d-flex justify-content-center align-items-center'>
                    <div className='ps-lg-4'>
                        <h2 className='text-center'>Effective Workout</h2>
                        <p className='pt-4'>
                            Selectorized machines make training simple to find out your maximum strength, allowing you to know your limits without getting hurt. Selectorized strength equipment are designed to adjust the weights without even getting up and interrupting your workout, providing an effective exercise.</p>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default WhyuseItems;