"use strict"; 

import {connect} from "mongoose";
import { DB_URL } from "./configEnv.js";

export async function connectDB() { 
    try { 
        await connect(DB_URL); 
        console.log("Base de datos conectada correctamente!"); 
    } catch (error) {
        console.log("Error en configDB.js -> connectDB(): ", error);
    }
}