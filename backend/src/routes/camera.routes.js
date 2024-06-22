import { Router } from "express";
import {
    createCamera,
    getCameras,
    updateCamera,
    deleteCamera,
} from '../controllers/camera.controller.js';

const router = Router();

router.post('/', createCamera);
router.get('/', getCameras);
router.patch('/', updateCamera);
router.delete('/', deleteCamera);

export default router;