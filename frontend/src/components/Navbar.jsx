
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/">Página principal</Link>
                </li>
                <li>
                    <Link to="/users">Usuarios</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehículos</Link>
                </li>
                <li>
                    <Link to="/cameras">Cámaras</Link>
                </li>
                <li>
                    <Link to="/statistics">Estadísticas</Link>
                </li>
                <li>
                    <Link to="/logout">Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
