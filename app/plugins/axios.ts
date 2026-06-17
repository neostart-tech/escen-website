import { defineNuxtPlugin } from '#app';
import config from '../../config';
import * as axios from 'axios'

const base_url = config.app_local ? config.app_dev_url : config.app_prod_url;

export default defineNuxtPlugin(() => {
    axios.default.defaults.baseURL = base_url;
    axios.default.defaults.headers.common['Accept'] = 'application/json';

    // Injection automatique du token dans chaque requête
    axios.default.interceptors.request.use((config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('candidat_token');
            if (token) {
                // Pour compatibilité Axios 1.x
                if (config.headers) {
                    config.headers.set ? config.headers.set('Authorization', `Bearer ${token}`) : config.headers['Authorization'] = `Bearer ${token}`;
                }
            }
        }
        return config;
    });

    return {
        provide: {
            axios: axios.default,
        },
    };
});
