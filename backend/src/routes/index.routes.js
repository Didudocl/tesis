import { Router } from "express";
import authRoutes from "./auth.routes.js";
import cameraRoutes from './camera.routes.js';

const router = Router();

// Ruta para la autenticación
router.use('/auth', authRoutes);
// Ruta para las cámaras
router.use('/camera', cameraRoutes);

export default router;