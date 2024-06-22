import Camera from '../models/camera.model.js';

export async function createCamera(req, res) {
  try {
    const { marca, modelo, ubicacion, estadoCamara, fechaIni, fechaFin } = req.body;

    // ! agregar validaciones con joi
    const newCamera = new Camera({
      marca,
      modelo,
      ubicacion,
      estadoCamara,
      fechaIni,
      fechaFin
    });

    await newCamera.save();

    res.status(201).json({
      message: "Cámara creada exitosamente",
      data: newCamera
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cámara', error });
  }
}

export async function getCameras(req, res) {
  try {
    const cameras = await Camera.find();

    if(!cameras) {
      return res.status(404).json({
        message: "No se encontraron cámaras",
        data: null
      })
    }

    res.status(200).json({
      message: "Lista de cámaras:",
      data: cameras
    })
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las cámaras', error });
  }
}

export async function updateCamera(req, res) {
  try {
    const id = req.params.id; // ! agregar validaciones con joi
    const body = req.body; // ! agregar validaciones con joi

    const cameraUpdate = await Camera.findByIdAndUpdate(id, body, {new:true});

    if(!cameraUpdate) {
      return res.status(404).json({
        message: "No se encontraron cámaras",
        data: null
      })
    }

    res.status(200).json({
      message: "Cámara actualizada correctamente",
      data: cameraUpdate
    })
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar la cámara', error });
  }
}

export async function deleteCamera(req, res) {
  try {
    const id = req.params.id; // ! agregar validaciones con joi

    const cameraDelete = await Camera.findByIdAndDelete(id);

    if(!cameraDelete) {
      return res.status(404).json({
        message: "No se encontraron cámaras",
        data: null
      })
    }

    res.status(200).json({
      message: "Cámara eliminada correctamente",
      data: cameraDelete
    })

  } catch (error) {
    res.status(500).json({ message: 'Error al eliminado la cámara', error });
  }
}