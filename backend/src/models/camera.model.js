// models/camera.model.js
import { Schema, model } from "mongoose";

const cameraSchema = new Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    ubicacion: { // ! Idealemnte que sea una URL que te abra otra pestaña del maps
        type: String,
        required: true,
    },
    estadoCamara: {
        type: String,
        required: true,
        enum: ['activo', 'no activo'],
    },
    fechaIni: {
        type: Date,
    },
    fechaFin: {
        type: Date
    },
});

export default model('Camera', cameraSchema);