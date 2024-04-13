import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/order';

const createOrder = async (order) => {
    return await axios.post(URL, order);
};

const findAllOrder = async () => {
    return await axios.get(URL);
};

const findOneOrder = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateOrder = async (id, order) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, order);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteOrder = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteAllOrder = () => {
    return '';
};

export { createOrder, findAllOrder, findOneOrder, updateOrder, deleteOrder, deleteAllOrder };
