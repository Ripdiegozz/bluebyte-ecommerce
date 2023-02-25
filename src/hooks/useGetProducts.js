import {useState, useEffect} from 'react'
import axios from 'axios';

function useGetProducts(API) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await axios(API);
        setProducts(await response.data);
    }
    fetchData();
    }, []);

    return products;
}

export default useGetProducts