import { Router } from 'express';
import passport from 'passport';
import { login, register, profile, logout } from '../controllers/auth.controller.js';

const router = Router();

// * Rutas para logeo con JWT
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/profile', profile)
  
// * Rutas para logeo con google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
  
router.get('/google/redirect', passport.authenticate('google', { 
  successRedirect: 'http://localhost:5173/',
  failureRedirect: '/'
}));

export default router;