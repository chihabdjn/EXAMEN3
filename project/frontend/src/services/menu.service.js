import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/menu';

const createMenu = async (menu) => {
    return await axios.post(URL, menu);
};

const findAllMenu = async () => {
    return await axios.get(URL);
};

const findOneMenu = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateMenu = async (id, menu) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, menu);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteMenu = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteAllMenu = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createMenu, findAllMenu, findOneMenu, updateMenu, deleteMenu, deleteAllMenu };
