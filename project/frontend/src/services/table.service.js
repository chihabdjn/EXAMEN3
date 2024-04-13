import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/table';

const createTable = async (table) => {
    return await axios.post(URL, table);
};

const findAllTable = async () => {
    return await axios.get(URL);
};

const findOneTable = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateTable = async (id, table) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, table);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteTable = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const delateAllTable = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createTable, findAllTable, findOneTable, updateTable, deleteTable, delateAllTable };
