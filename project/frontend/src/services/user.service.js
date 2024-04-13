import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/user';

const loginUser = async (user) => {
    return await axios.post(API_URL + '/login', user);
};

const createUser = async (user) => {
    var response = await axios.post(URL, user);
    return response.data;
};

const findAllUsers = async () => {
    return await axios.get(URL);
};

const findOneUser = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateUser = async (id, user) => {
    const { data } = await axios.put(`${URL}/${id}`, user);
    return data;
};

const deleteUser = async (id) => {
    console.log('deleting data');
    const data = await axios.delete(`${URL}/${id}`);
    console.log(data);
    return data;
};

const deleteAllUsers = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { loginUser, createUser, findAllUsers, findOneUser, updateUser, deleteUser, deleteAllUsers };
