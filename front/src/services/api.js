import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(BASE_URL);

// 1. Creamos la instancia (nuestra "aduana" privada)
const api = axios.create({ baseURL: BASE_URL });

// 2. Interceptor de REQUEST (antes de que la petición salga)
api.interceptors.request.use(config => {
    // Buscamos el token en la memoria del navegador
    const token = localStorage.getItem('token');

    // Si existe el token, se lo pegamos a las cabeceras
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 3. Interceptor de RESPONSE (cuando llega la respuesta del backend)
api.interceptors.response.use(
    response => response, // Si todo sale bien, devuelve la info normal
    error => {
        // Si el backend dice "401 No Autorizado" (token inválido/expirado)
        if (error.response?.status === 401) {
            localStorage.removeItem('token'); // Borramos el token malo
            window.location.href = '/login'; // Pateamos al usuario al login
        }
        return Promise.reject(error);
    }
);

// 4. Funciones

// getPlatos AHORA USA `api` -> El interceptor le pondrá el token automáticamente
export async function getPlatos() {
    // Como la instancia ya tiene baseURL, solo ponemos la ruta relativa ('/menu')
    const response = await api.get('/menu', {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    });
    return response.data;
}

// login SIGUE USANDO `axios` directo -> No necesita token para mandar correo/password
export async function login(email, password) {
    // Aquí sí ponemos la URL completa porque no usamos la instancia
    const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password
    });
    return response.data;
}
