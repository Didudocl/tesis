import express, { urlencoded, json } from 'express';
import cors from "cors";
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import indexRoutes from './routes/index.routes.js';
import { passportGoogleSetup } from './auth/passport-OAuth.js';
import { connectDB } from './config/configDB.js';
import { HOST, PORT, cookieKey } from './config/configEnv.js';
import { passportJwtSetup } from './auth/passport-jwt.js';
import { createUsers, createRoles } from './config/initSetup.js';
  
async function setupServer() {
  try {
    const app = express();

    app.use(cors({ 
      credentials: true, 
      origin: true 
    }));

    app.use(urlencoded({ extended: true}));

    app.use(json());

    app.use(cookieParser());

    app.use(helmet());

    app.use(morgan("dev"));

    app.use(session({
      secret: cookieKey,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
  }));

    app.use(passport.initialize());
    app.use(passport.session());

    passportGoogleSetup();
    passportJwtSetup();

    app.use('/api', indexRoutes);

    createRoles();
    createUsers();

    app.listen(PORT, () => {
      console.log(`Server escuchando en: http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.log("Error en index.js -> setupServer(), el error es: ", error);
  }
}


async function setupAPI() {
  try {
    await connectDB();
    await setupServer();
    await createRoles();
    await createUsers();
  } catch (error) {
    console.log("Error en index.js -> setupAPI(), el error es: ", error);
  }
}

setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => console.log("Error en index.js -> setupAPI(), el error es: ", err));