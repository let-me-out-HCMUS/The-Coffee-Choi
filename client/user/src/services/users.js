import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/users';

export const updateUser = async (data) => {
    const res = await axios.patch(API_URL, data);
    return res.data;
}