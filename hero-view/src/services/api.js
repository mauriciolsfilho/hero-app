import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hero-api.vercel.app:3333'
})

export default api;