import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.component';
import Login from './pages/Login.page';
// import HomePage from './pages/Home.page';
// import { Fragment } from 'react/jsx-runtime';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;