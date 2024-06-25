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
    const handleEdit = (user) => {
        const confirmed = window.confirm(`¿Estás seguro de que quieres editar a ${user.nombre}?`);
        if (confirmed) {
            // Lógica de edición
            console.log(`Editando a ${user.nombre}`);
        }
    };

    const handleDelete = (user) => {
        const confirmed = window.confirm(`¿Estás seguro de que quieres eliminar a ${user.nombre}?`);
        if (confirmed) {
            // Lógica de eliminación
            console.log(`Eliminando a ${user.nombre}`);
        }
    };

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
                                <button className="edit-btn" onClick={() => handleEdit(user)}>✏️</button>
                                <button className="delete-btn" onClick={() => handleDelete(user)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
