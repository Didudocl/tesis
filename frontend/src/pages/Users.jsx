

import '../styles/Users.css';

const users = [
    {
        nombre: 'Diego Alexis Salazar Jara',
        rut: '21.308.770-3',
        email: 'diegosalazar.j2024@gmail.com',
        cargo: 'Soporte informática',
        rol: 'Administrador'
    },
    {
        nombre: 'Diego Alexis Meza Ortega',
        rut: '21.308.770-3',
        email: 'diegomeza.o2024@gmail.com',
        cargo: 'Soporte informática',
        rol: 'Administrador'
    },
    {
        nombre: 'Alejandro Retamal',
        rut: 'XX.XXX.XXX-X',
        email: 'aleretamal7@hotmail.com',
        cargo: 'Coordinador Central Cámaras',
        rol: 'Encargado cámaras'
    },
];

const Users = () => {
    return (
        <div className="users-container">
            <h1>Usuarios Registrados</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>RUT</th>
                        <th>Correo electrónico</th>
                        <th>Cargo</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nombre}</td>
                            <td>{user.rut}</td>
                            <td>{user.email}</td>
                            <td>{user.cargo}</td>
                            <td>
                                <span className={user.rol === 'Administrador' ? 'rol-admin' : 'rol-encargado'}>
                                    {user.rol}
                                </span>
                            </td>
                            <td>
                                <button className="edit-btn">✏️</button>
                                <button className="delete-btn">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
