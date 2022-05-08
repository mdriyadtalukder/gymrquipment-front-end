import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import ProductsCard from './Product/ProductsCard';
import img from '../../images/home-use-1.jpg';
import img2 from '../../images/Commercial.jpg';
import img3 from '../../images/Selectorized-68-series.jpg';
import img4 from '../../images/Selectorized-88-series-1.jpg';
import WhyuseItems from './WhyuseItems';
import Footer from '../Footer/Footer';
import { PuffLoader } from 'react-spinners';
const loaderStyle = `
display : block;
margin: auto;
`;
const Home = () => {
    const [itemss, setItems] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('https://tranquil-brushlands-76388.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setloading(false);
            })
    }, [itemss]);
    return (
        <>

            {!loading && <>
                <Banner></Banner>
                <section className='container'>
                    <h1 className='text-center fw-bold mb-4'>Welcome to Gym Equipment House</h1>
                    <p className=' text-center fs-3'>Items for home and commercial </p>
                    <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                        <div className='col mb-4'>

                            <img src={img} className='img-fluid' alt="" />
                        </div >
                        <div className='col mb-4'>
                            <img src={img2} className='img-fluid' alt="" />
                        </div >
                    </div>
                </section>
            </>}
            <div className='container'>
                {!loading && <h1 className='text-center fw-bold'> Gym Equipment Items</h1>}
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    {
                        itemss.slice(0, 6).map(item => <ProductsCard key={item._id} item={item}>Card</ProductsCard>)
                    }
                </div>
                {!loading && <div className='text-center'>
                    <Link to='/products' className='btn button3 mb-2'>Manage Inventories <i className="fas fa-arrow-right"></i></Link>
                </div>}
            </div>
            <PuffLoader loading={loading} css={loaderStyle} color={"#5ed9d7"} size={150}></PuffLoader>
            {!loading && <><section className='container pt-5 mt-5'>
                <h1 className='text-center fw-bold mb-4'>Gym Equipment House Selectorized Equipment</h1>
                <p className=' text-center fs-3'>Premium quality material and skilled technology </p>
                <div id='containers' className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-5 pt-4 pb-4'>
                    <div className='col mb-4'>
                        <img src={img3} className='img-fluid' alt="" />
                    </div >
                    <div className='col mb-4 d-flex justify-content-center align-items-center'>
                        <div className='ps-lg-4'>
                            <h2 className='text-center'>68 Series Selectorized Machine</h2>
                            <p className='pt-4'>
                                Gym Equipment House 68 series strength equipment deliver high quality and performance. Innovative technology and modern design provide the exciting exercise experience.Our 68 Line equipment consist of 40 professional products, allowing you to build muscles effectively.</p>
                        </div>
                    </div >
                </div>
                <div id='containers' className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4'>
                    <div className='col mb-4 d-flex justify-content-center align-items-center'>
                        <div className='pe-lg-4'>
                            <h2 className='text-center'>88 Series Selectorized Machine</h2>
                            <p className='pt-4'>
                                Our 88 series power equipment combine the classic and innovative design. They have striking and attractive look. Trainers can meet their needs with proper adjustments based on personal preference and size, and create a natural exercise experience.</p>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <img src={img4} className='img-fluid' alt="" />
                    </div >
                </div>
            </section>
                <WhyuseItems></WhyuseItems>
                <Footer></Footer>
            </>}
        </>




    );
};

export default Home;