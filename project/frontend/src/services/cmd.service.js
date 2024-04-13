import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/cmd';

const createCmd = async (cmd) => {
    return await axios.post(URL, cmd);
};

const findAllCmd = async () => {
    return await axios.get(URL);
};

const findOneCmd = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateCmd = async (id, cmd) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, cmd);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteCmd = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteAllCmd = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createCmd, findAllCmd, findOneCmd, updateCmd, deleteCmd, deleteAllCmd };
