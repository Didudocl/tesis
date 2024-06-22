"use strict";
// Importa el modelo de datos 'Role'
import Role from "../models/role.model.js";
import User from "../models/user.model.js";

/**
 * Crea los roles por defecto en la base de datos.
 * @async
 * @function createRoles
 * @returns {Promise<void>}
 */
async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "Encargado cámaras" }).save(),
      new Role({ name: "Administrador" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

/**
 * Crea los usuarios por defecto en la base de datos.
 * @async
 * @function createUsers
 * @returns {Promise<void>}
 */
async function createUsers() {
  try {
    const count = await User.estimatedDocumentCount();
    if (count > 0) return;

    const admin = await Role.findOne({ name: "Administrador" });
    const encargado = await Role.findOne({ name: "Encargado cámaras" });

    await Promise.all([
      new User({
        nombreCompleto: "Nombre encargado cámaras",
        correoElec: "camara@cauquenes.cl",
        password: await User.encryptPassword("camara123"),
        cargo: "Encargado de cámaras",
        rol: encargado._id,
      }).save(),
      new User({
        nombreCompleto: "Nombre administrador",
        correoElec: "administrador@cauquenes.cl",
        password: await User.encryptPassword("admin123"),
        cargo: "Administrador",
        rol: admin._id,
      }).save(),
    ]);
    console.log("* => Users creados exitosamente");
  } catch (error) {
    console.error(error);
  }
}

export { createRoles, createUsers };