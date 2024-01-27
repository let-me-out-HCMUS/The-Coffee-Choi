import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/coupons';

export const getCoupon = async (code) => {
    const res = await axios.get(`${API_URL}/${code}`);
    return res.data;
}