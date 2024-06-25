import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default AppRouter;
