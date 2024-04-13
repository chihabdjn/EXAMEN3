import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/restaurant';

const createRestaurant = async (restaurant) => {
    return await axios.post(URL, restaurant);
};

const findAllRestaurant = async () => {
    return await axios.get(URL);
};

const findOneRestaurant = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateRestaurant = async (id, restaurant) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, restaurant);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteRestaurant = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const delateAllRestaurant = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createRestaurant, findAllRestaurant, findOneRestaurant, updateRestaurant, deleteRestaurant, delateAllRestaurant };
