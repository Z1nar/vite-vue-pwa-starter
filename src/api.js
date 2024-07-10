import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://mensa.gregorflachs.de', // Basis-URL der API
    headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY
    }
});

export default apiClient;
