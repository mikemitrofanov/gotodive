import axios from "axios";

class AxiosController {
    token;
    instance;

    constructor({baseURL}) {
        this.instance = axios.create({baseURL});
        this.init();
    }

    setToken(token) {
        this.token = token;
    }

    init() {
        this.instance.interceptors.request.use((request) => {
            request.headers['Content-Type'] = 'application/json';
            if (this.token) {
                request.headers['Authorization'] = 'Bearer ' + this.token;

            }
            return request
        }, (error) => {
            return Promise.reject(error)
        })
    }
}

export const axiosApi = new AxiosController({baseURL: process.env.API_URL + '/ru/'})