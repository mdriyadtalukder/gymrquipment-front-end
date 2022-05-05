import { useEffect, useState } from 'react';
const useItems = () => {
    const [itemss, setItems] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        fetch('https://tranquil-brushlands-76388.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setloading(false);
            })
    }, [itemss]);
    return [itemss, loading, setItems];
}

export default useItems;