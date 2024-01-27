import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/products';

export const getProducts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

export const getProduct = async (slug) => {
    const res = await axios.get(`${API_URL}/${slug}`);
    return res.data;
}