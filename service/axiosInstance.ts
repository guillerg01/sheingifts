// axiosInstance.js
import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_API;
const axiosInstance = axios.create({
 baseURL:baseUrl ,// Reemplaza esto con la URL base de tu API
 timeout: 1000000, // Tiempo de espera en milisegundos
 headers: {
    'Content-Type': 'application/json',
    // Aquí puedes añadir otros encabezados comunes
 },
});

export default axiosInstance;