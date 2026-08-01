const express = require("express");

const router = express.Router();


const {
    login
} = require("../controllers/authController");



/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación del sistema
 */


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicio de sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: reyesnata021712@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *
 *     responses:
 *       200:
 *         description: Login exitoso
 *
 *       401:
 *         description: Credenciales incorrectas
 *
 */


router.post(
    "/login",
    login
);



module.exports = router;