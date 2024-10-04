import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketmovies-api-41wp.onrender.com',
    withCredentials: true,
});