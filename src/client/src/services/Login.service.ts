import axios from 'axios';
import { ILogin } from '../../interfaces/User.interface';

export async function loginRequisition(user: ILogin) {
    try {
        const response = await axios.post('http://localhost:3001/login', {
            email: user.email,
            password: user.password
        });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        throw new Error('Failed to log in.');
    }
}