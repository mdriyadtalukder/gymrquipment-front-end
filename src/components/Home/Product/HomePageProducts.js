import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hook/useItems';
import ProductsCard from './ProductsCard';
import './ProductsCard.css'

const HomePageProducts = () => {
    const [itemss, setItems] = useItems();
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
    );
};

export default HomePageProducts;