import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { TOKEN_SECRET } from '../config/configEnv.js';

export async function login(req, res) {
    const { correoElec, password } = req.body;
    try {
        const userFound = await User.findOne({ correoElec });

        if (!userFound) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await User.comparePassword(
            password,
            userFound.password
        )
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const payload = { correoElec: userFound.correoElec };
        const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '1h' });

        res.cookie('jwt', {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.json({ 
            message: 'Inicio de sesión exitoso', 
            Token: token 
        });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error iniciando sesión', error 
        });
    }
}

export async function register(req, res) {
    const { nombreCompleto, correoElec, password, cargo, rol } = req.body;
    try {
        const existingUser = await User.findOne({ correoElec });

        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const newUser = new User({ 
            nombreCompleto, 
            correoElec, 
            password: await User.encryptPassword(password),
            cargo,
            rol
        });
        
        await newUser.save();

        res.status(201).json({ 
            message: 'Usuario registrado con éxito',
            data: newUser
        });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error registrando al usuario', error 
        });
    }
}

export async function profile(req, res) {
    
}

export function logout(req, res) {
    try {
        const cookies = req.cookies;
        console.log(cookies)
        if(!cookies?.jwt) {
            return res.status(400).json({
                message: "No hay token"
            })
        }

        res.clearCookie('jwt', {httpOnly: true});

        res.status(200).json({
            message: "Sesión cerrada exitosamente"
        });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error cerrando sesión', error 
        });
    }
}
