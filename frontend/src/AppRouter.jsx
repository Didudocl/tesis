// AppRouter.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <Home />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
