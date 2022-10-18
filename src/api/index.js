import axios from 'axios';
import waait from 'waait';

const ROOT_URL = process.env.REACT_APP_API_URL;

export const api = Object.freeze({
    async getTags() {
        const  { data } = await  axios.get(`${ROOT_URL}/tags`);

        await waait(3000);

        return data;
    },
    async getTips() {
        const  { data } = await  axios.get(`${ROOT_URL}/tips`);

        await waait(3000);

        return data.data;
    },
    async getTipById(id) {
        const  { data: tipById } = await axios.get(`${ROOT_URL}/tips/${id}`);

        await waait(2000);

        return tipById;
    },
});
