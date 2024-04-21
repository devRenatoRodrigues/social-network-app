import { Navigate } from 'react-router-dom';
import HomePage from '../pages/Home.page';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');

    return token ? <HomePage /> : <Navigate to="/login" />;
}

export default PrivateRoute;
