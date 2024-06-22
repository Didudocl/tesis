import { useNavigate } from 'react-router-dom';
import { login, loginAuth } from '../services/auth.service.js';
import Form from '../components/Form';

const Login = () => {
    const navigate = useNavigate();

    const loginSubmit = (data) => {
        login(data).then(() => {
            navigate('/home')
        })
    }

    const loginAuthSubmit = async () => {
        try {
            loginAuth();
        } catch (error) {
            console.error("Google auth error:", error);
        }
    };


    return (
        <main className="container">
            <Form
                title="Iniciar sesión"
                fields={[
                    {
                        label: "Correo electrónico",
                        name: "email",
                        placeholder: "example@gmail.com",
                        type: "email",
                        required: false,
                    },
                    {
                        label: "Contraseña",
                        name: "password",
                        placeholder: "**********",
                        type: "password",
                        required: false,
                    },
                    
                ]}
                buttonText="Google"
                onSubmit={loginAuthSubmit}
            />
        </main>
    );
};

export default Login;