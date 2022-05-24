import axios from "axios";

export const apis = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000",
});

export default apis;
