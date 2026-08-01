const express = require("express");

const router = express.Router();


const {

    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    confirmEmail

} = require("../controllers/userController");





/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */





/**
 * @swagger
 * /api/user/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */

router.get(
    "/users",
    getAllUsers
);






/**
 * @swagger
 * /api/user/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */


router.get(
    "/users/:id",
    getUserById
);






/**
 * @swagger
 * /api/user/users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Natalia
 *               email:
 *                 type: string
 *                 example: natalia@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: aprendiz
 *               postJob:
 *                 type: string
 *                 example: ingeniera
 *               status:
 *                 type: string
 *                 example: Activo
 *               documentId:
 *                 type: string
 *                 example: 123456789
 *
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */


router.post(
    "/users",
    createUser
);






/**
 * @swagger
 * /api/user/users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 */


router.put(
    "/users/:id",
    updateUser
);






/**
 * @swagger
 * /api/user/users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 */


router.delete(
    "/users/:id",
    deleteUser
);






/**
 * @swagger
 * /api/user/confirm-email/{id}:
 *   get:
 *     summary: Confirmar correo electrónico
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *
 *     responses:
 *       200:
 *         description: Correo confirmado correctamente
 */


router.get(
    "/confirm-email/:id",
    confirmEmail
);






module.exports = router;