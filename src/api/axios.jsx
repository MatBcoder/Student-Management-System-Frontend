import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,

    headers: {
        "Content-Type": "application/json",
    }
});
//add an interceptor to include the token in the request headers
api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;