import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/orders';

export const createOrder = async (order) => {
    const res = await axios.post(API_URL, order);
    return res.data;
}