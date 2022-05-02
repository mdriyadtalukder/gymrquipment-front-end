import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import useItems from './Hook/useItems';
import ProductsCard from './Product/ProductsCard';
import img from '../../images/home-use-1.jpg';
import img2 from '../../images/Commercial.jpg';
const Home = () => {
    const [itemss, loading, setItems] = useItems();
    const Itemss = [];
    for (let i = 0; i < itemss.length; i++) {
        if (Itemss.length < 6) {
            Itemss.push(itemss[i]);
        }
        else {
            break;
        }
    }
    return (

        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="border" variant="info" />
            </div> :
                <div>
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
                    <div className='container'>
                        <h1 className='text-center fw-bold'> Gym Equipment Items</h1>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                            {
                                Itemss.map(item => <ProductsCard key={item._id} item={item}>Card</ProductsCard>)
                            }
                        </div>
                        <div className='text-center'>
                            <Link to='/products' className='btn button3 mb-2'>Manage Inventories <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Home;