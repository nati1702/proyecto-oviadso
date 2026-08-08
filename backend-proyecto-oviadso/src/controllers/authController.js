const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const {
    loginService
} = require("../services/authService");

const {
    Response
} = require("../functions/response");

dotenv.config();


// ==========================================
// CLAVE SECRETA JWT
// ==========================================
const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;


// ==========================================
// LOGIN
// ==========================================
const login = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        // Validar que lleguen los datos
        if (!email || !password) {

            const response = new Response(
                false,
                "Debe enviar email y contraseña",
                null,
                "Datos incompletos"
            );

            return res.status(400).json(response.json);
        }


        // Buscar y validar usuario
        const user = await loginService(
            email,
            password
        );


        // Credenciales incorrectas
        if (!user) {

            const response = new Response(
                false,
                "Credenciales incorrectas",
                null,
                "Usuario o contraseña inválidos"
            );

            return res.status(401).json(response.json);
        }


        // Validar que exista la clave JWT
        if (!JWT_KEY_SECRET) {

            console.error("JWT_KEY_SECRET no está configurada en el archivo .env");

            const response = new Response(
                false,
                "Error de configuración del servidor",
                null,
                "No se encontró JWT_KEY_SECRET"
            );

            return res.status(500).json(response.json);
        }


        // Generar token
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            JWT_KEY_SECRET,
            {
                expiresIn: "2h"
            }
        );


        // Respuesta exitosa
        const response = new Response(
            true,
            "Login exitoso",
            {
                user: user,
                token: token
            },
            null
        );

        return res.status(200).json(response.json);


    } catch (error) {

        console.error("Error en login:", error);

        const response = new Response(
            false,
            "Error en login",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ==========================================
// EXPORTAR
// ==========================================
module.exports = {
    login
};