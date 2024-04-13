import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/role';

const createRole = async (role) => {
    return await axios.post(URL, role);
};

const findAllRole = async () => {
    return await axios.get(URL);
};

const findOneRole = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateRole = async (id, role) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, role);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteAllRole = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteRole = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createRole, findAllRole, findOneRole, updateRole , deleteRole, deleteAllRole};
