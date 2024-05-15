// axiosInstance.js
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


const baseUrl = process.env.NEXT_PUBLIC_API;


const axiosInstancePrivate = axios.create({
   baseURL: baseUrl,// Reemplaza esto con la URL base de tu API
   timeout: 1000000, // Tiempo de espera en milisegundos
   headers: {
      'Content-Type': 'application/json',
      // Aquí puedes añadir otros encabezados comunes
   },
});

// Interceptor de solicitudes
axiosInstancePrivate.interceptors.request.use((config) => {
   const accessToken = Cookies.get('access_token');
   // Añade el token de acceso al encabezado de autorización si está disponible
   if (accessToken) {
      config.headers[ "Authorization" ] = accessToken;
   }
   return config;
}, (error) => {
   return Promise.reject(error);
});

// Interceptor de respuestas
axiosInstancePrivate.interceptors.response.use((response) => {
   console.log('Interceptor de respuesta ejecutado');
   return response;
}, (error) => {
   console.log('Interceptor de error ejecutado', error);

   // Verifica si el error es un 401
   if (error.response && (error.response.status === 401 || error.response.status === 403 || error.response.status === 500)) {
      Cookies.remove('access_token');
      localStorage.clear();
      window.location.replace('/')
   }

   return Promise.reject(error);
});

export default axiosInstancePrivate;