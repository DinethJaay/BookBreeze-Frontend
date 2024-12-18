import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5164/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = (token: string) => {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
};
