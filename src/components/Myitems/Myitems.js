import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProductsCard from '../Home/Product/ProductsCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
const Myitems = () => {
    const [user] = useAuthState(auth);
    const [items, setItem] = useState([]);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    //Show my items
    useEffect(() => {
        const myItems = async () => {
            const email = user?.email;
            try {
                setloading(true)
                const { data } = await axios.get(`https://gymequipment-back-end.onrender.com/addusers?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItem(data)
                setloading(false)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        myItems();
    }, [user]);

    //delete items function
    const deleteItem = id => {
        const remaining = items.filter(item => item._id !== id);
        setItem(remaining);
    }

    return (
        <div>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="border" variant="info" />
            </div> :
                <div>
                    <div className='container' style={{ minHeight: '90vh' }}>
                        <h1 className='text-center mt-3 mb-3 fw-bold'>My Items</h1>
                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                            {
                                items.map(item => <ProductsCard deleteItem={deleteItem} key={item._id} item={item}></ProductsCard>)
                            }
                        </div>
                    </div>
                    <Footer></Footer>
                </div>}
        </div>

    );
};

export default Myitems;