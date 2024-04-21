import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { login } from '../../redux/slices/authSlice';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await dispatch(login({ email, password })).unwrap();
            navigate('/');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Failed to log in:', error.message);
            } else {
                console.error('Failed to log in:', error);
            }
        }
    };

    return (
        <Container fixed>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} className="login-box flex flex-col items-center justify-center space-y-4 gap-8 column-3">
                <form onSubmit={handleLogin}>
                    <div className="div-spacing">
                        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>LinkedIt</Typography>
                    </div>
                    <div className="div-spacing">
                        <TextField label="E-mail" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="div-spacing">
                        <TextField label="Password" type="password" variant="filled" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="div-spacing">
                        <Button variant="outlined" color="primary" type="submit" sx={{ width: "100%" }}>
                            Sign in
                        </Button>
                    </div>
                </form>
            </Box>
        </Container>
    );
};