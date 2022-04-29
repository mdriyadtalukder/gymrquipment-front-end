import { useEffect, useState } from 'react';

const useItems = () => {
    const [itemss, setItems] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-brushlands-76388.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [itemss, setItems];
}

export default useItems;