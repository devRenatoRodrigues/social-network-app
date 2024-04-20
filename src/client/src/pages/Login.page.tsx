import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { login } from '../../redux/slices/authSlice';
import '../styles/Login.css';

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await dispatch(login({ email, password })).unwrap();
        } catch (error) {
            if (error instanceof Error) {
                console.error('Failed to log in:', error.message);
            } else {
                console.error('Failed to log in:', error);
            }
        }
    };

    return (
        <div className="flex-col">
            <form onSubmit={handleLogin}>
                <Typography variant="h2">LinkedIt</Typography>
                <TextField label="E-mail" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="outlined" color="primary" onClick={handleLogin}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};