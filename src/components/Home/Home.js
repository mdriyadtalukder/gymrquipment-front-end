import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import useItems from './Hook/useItems';
import ProductsCard from './Product/ProductsCard';
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