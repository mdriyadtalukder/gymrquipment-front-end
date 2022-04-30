import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProductsCard from '../Home/Product/ProductsCard';
import axios from 'axios';
const Myitems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const myItems = async () => {
            const email = user?.email;
            const { data } = await axios.get(`https://tranquil-brushlands-76388.herokuapp.com/users?email=${email}`);
            setItems(data)
        }
        myItems();
    }, [user]);
    const deleteItem = id => {
        const remaining = items.filter(item => item._id !== id);
        setItems(remaining);
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-3 mb-3 fw-bold'>My Items</h1>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                {
                    items.map(item => <ProductsCard deleteItem={deleteItem} key={item._id} item={item}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Myitems;