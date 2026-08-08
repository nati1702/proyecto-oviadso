const {
    allUsers,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    confirmEmailService,
    forgotPasswordService,
    resetPasswordService
} = require("../services/userService");

const { sendEmail } = require("../services/emailService");
const { getTemplate } = require("../services/templateService");
const { Response } = require("../functions/response");

// ==========================================
// OBTENER TODOS LOS USUARIOS
// ==========================================
const getAllUsers = async (req, res) => {
    try {

        const users = await allUsers();

        const response = new Response(
            true,
            "Usuarios obtenidos exitosamente",
            users,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al obtener usuarios:", error);

        const response = new Response(
            false,
            "Error al obtener usuarios",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// OBTENER USUARIO POR ID
// ==========================================
const getUserById = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await getUserByIdService(id);

        if (!user) {

            const response = new Response(
                false,
                "Usuario no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Usuario encontrado",
            user,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al buscar usuario:", error);

        const response = new Response(
            false,
            "Error al buscar usuario",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// CREAR USUARIO
// ==========================================
const createUser = async (req, res) => {
    try {

        const user = await createUserService(req.body);

        const template = getTemplate("confirmEmail", {

            "@nombreEmpresa": "OVIADSO",

            "@name": user.username,

            "@link": `http://localhost:3000/api/user/confirm-email/${user.id}`,

            "@nameBtn": "Crear cuenta"
        });

        await sendEmail(
            user.email,
            template.subject,
            "Confirmación de correo",
            template.html
        );

        const response = new Response(
            true,
            "Usuario creado correctamente y correo enviado",
            user,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al crear usuario:", error);

        const response = new Response(
            false,
            "Error al crear usuario",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// ACTUALIZAR USUARIO
// ==========================================
const updateUser = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await updateUserService(id, req.body);

        if (!user) {

            const response = new Response(
                false,
                "Usuario no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Usuario actualizado correctamente",
            user,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al actualizar usuario:", error);

        const response = new Response(
            false,
            "Error al actualizar usuario",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// ELIMINAR / INACTIVAR USUARIO
// ==========================================
const deleteUser = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await deleteUserService(id);

        const response = new Response(
            true,
            "Usuario eliminado correctamente",
            result,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al eliminar usuario:", error);

        const response = new Response(
            false,
            "Error al eliminar usuario",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// CONFIRMAR CORREO
// ==========================================
const confirmEmail = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await confirmEmailService(id);

        if (!user) {

            const response = new Response(
                false,
                "Usuario no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Correo confirmado correctamente",
            user,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al confirmar correo:", error);

        const response = new Response(
            false,
            "Error al confirmar correo",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// SOLICITAR RESTABLECIMIENTO DE CONTRASEÑA
// ==========================================
const forgotPassword = async (req, res) => {
    try {

        const { email } = req.body;

        // Validar que llegue el correo
        if (!email) {

            const response = new Response(
                false,
                "El correo es obligatorio",
                null,
                "Debe enviar el email"
            );

            return res.status(400).json(response.json);
        }

        const result = await forgotPasswordService(email);

        // Usuario no encontrado
        if (!result) {

            const response = new Response(
                false,
                "Usuario no encontrado",
                null,
                "No existe un usuario registrado con ese correo"
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Correo de restablecimiento enviado correctamente",
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(
            "Error al solicitar restablecimiento:",
            error
        );

        const response = new Response(
            false,
            "Error al solicitar restablecimiento",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// RESTABLECER CONTRASEÑA
// ==========================================
const resetPassword = async (req, res) => {
    try {

        const { token, newPassword } = req.body;

        // Validar datos
        if (!token || !newPassword) {

            const response = new Response(
                false,
                "Datos incompletos",
                null,
                "Debe enviar token y nueva contraseña"
            );

            return res.status(400).json(response.json);
        }

        const result = await resetPasswordService(
            token,
            newPassword
        );

        // Token inválido o expirado
        if (!result) {

            const response = new Response(
                false,
                "Token inválido o expirado",
                null,
                "El enlace de restablecimiento ya no es válido"
            );

            return res.status(400).json(response.json);
        }

        const response = new Response(
            true,
            "Contraseña restablecida correctamente",
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(
            "Error al restablecer contraseña:",
            error
        );

        const response = new Response(
            false,
            "Error al restablecer contraseña",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// ==========================================
// EXPORTAR CONTROLADORES
// ==========================================
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    confirmEmail,
    forgotPassword,
    resetPassword
};