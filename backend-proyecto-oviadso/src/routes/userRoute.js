const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    confirmEmail,
    forgotPassword,
    resetPassword
} = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

// ==========================================
// OBTENER TODOS LOS USUARIOS
// ==========================================

router.get(
    "/users",
    verifyToken,
    getAllUsers
);

// ==========================================
// OBTENER USUARIO POR ID
// ==========================================

router.get(
    "/users/:id",
    verifyToken,
    getUserById
);

// ==========================================
// CREAR USUARIO
// ==========================================

router.post(
    "/users",
    verifyToken,
    createUser
);

// ==========================================
// ACTUALIZAR USUARIO
// ==========================================

router.put(
    "/users/:id",
    verifyToken,
    updateUser
);

// ==========================================
// ELIMINAR USUARIO
// ==========================================

router.delete(
    "/users/:id",
    verifyToken,
    deleteUser
);

// ==========================================
// CONFIRMAR CORREO
// ==========================================
// NO lleva verifyToken.
// El usuario llega desde el enlace recibido
// en su correo electrónico.

router.get(
    "/confirm-email/:id",
    confirmEmail
);

// ==========================================
// SOLICITAR RESTABLECIMIENTO DE CONTRASEÑA
// ==========================================
// NO lleva verifyToken.
// El usuario todavía no está autenticado.

router.post(
    "/forgot-password",
    forgotPassword
);

// ==========================================
// RESTABLECER CONTRASEÑA
// ==========================================
// NO lleva verifyToken.
// La seguridad se realiza mediante el token
// generado específicamente para recuperar
// la contraseña.

router.post(
    "/reset-password",
    resetPassword
);

module.exports = router;