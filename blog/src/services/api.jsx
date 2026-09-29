import axios from "axios";


export const api = axios.create({
    baseURL: "https://newsdata.io/api/1",
});