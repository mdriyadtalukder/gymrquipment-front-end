import React from 'react';
import useItems from '../Hook/useItems';
import ProductsCard from './ProductsCard';

const Product = () => {
    const [itemss, setItems] = useItems();
    return (
        <div className='container'>
          <h1 className='text-center fw-bold'>Items</h1>
            <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                {
                    itemss.map(item => <ProductsCard key={item._id} item={item}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Product;