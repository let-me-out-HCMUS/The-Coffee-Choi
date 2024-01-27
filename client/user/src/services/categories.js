import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/categories';

export const getCategories = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

export const getProductsCustom = async (category, page, limit, sort, from, to, discount) => {
    const res = await axios.get(`${API_URL}/${category}?page=${page}&limit=${limit}&sort=${sort}&price[gte]=${from}&price[lte]=${to}&discount[gte]=${discount}
    `);
    return res.data;
}