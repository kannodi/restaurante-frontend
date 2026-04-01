import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(BASE_URL);
export async function getPlatos() {
    const response = await axios.get(`${BASE_URL}menu`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    });
    return response.data;
}

export async function login(email, password) {
    const response = await axios.post(`${BASE_URL}auth/login`, {
        email,
        password
    });
    return response.data;
}