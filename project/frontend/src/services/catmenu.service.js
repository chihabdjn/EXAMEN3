import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/catmenu';

const createCatMenu = async (catMenu) => {
    return await axios.post(URL, catMenu);
};

const findAllCatMenu = async () => {
    return await axios.get(URL);
};

const findOneCatMenu = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateCatMenu = async (id, catMenu) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, catMenu);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteCatMenu = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteAllCatMenu = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createCatMenu, findAllCatMenu, findOneCatMenu, updateCatMenu, deleteCatMenu, deleteAllCatMenu };
