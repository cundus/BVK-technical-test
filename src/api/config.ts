import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/'
})

API.defaults.headers['x-api-key'] = import.meta.env.VITE_API_KEY

export default API