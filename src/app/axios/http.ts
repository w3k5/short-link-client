import { LocalStorageTokens } from '@shared';
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig } from 'axios';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

/**
 * Для работы с локальным бэкендом
 */
export const BASE_URL = import.meta.env.VITE_API_URL || 'https://www.ruurl.ru';
/**
 * Для работы с бэкендом на севере
 */
// export const BASE_URL = 'https://courses-api.weksik.ru';

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

axiosClient.defaults.baseURL = BASE_URL;
axios.defaults.baseURL = BASE_URL;

axiosClient.interceptors.response.use(undefined, (error: AxiosError) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        throw error;
    },
);
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig): Promise<any> => {
    if (config.withCredentials === false) return config;
    const token = localStorage.getItem(LocalStorageTokens.ACCESS_TOKEN);
    if (config.headers && token) config.headers.Authorization = `Bearer ${token}`;
    return { ...config, cancelToken: source.token, withCredentials: undefined };
});

export default axiosClient;
