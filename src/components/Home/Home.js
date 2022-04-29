import React from 'react';
import Banner from './Banner/Banner';
import HomePageProducts from './Product/HomePageProducts';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <HomePageProducts></HomePageProducts>

        </div>
    );
};

export default Home;