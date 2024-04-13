import API_URL from '@/const';
import axios from 'axios';

const URL = API_URL + '/review';

const createReview = async (review) => {
    return await axios
        .post(URL, review)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
};

const findAllReview = async () => {
    return await axios.get(URL);
};

const findOneReview = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateReview = async (id, review) => {
    try {
        const { data } = await axios.put(`${URL}/${id}`, review);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const deleteReview = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const delateAllReview = async () => {
    try {
        const { data } = await axios.delete(URL);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { createReview, delateAllReview, deleteReview, findAllReview, findOneReview, updateReview, updateReview };
