const crypto = require("crypto");
const userModel = require("../models/userModel");
const { sendEmail } = require("./emailService");

// ==========================================
// OBTENER TODOS LOS USUARIOS
// ==========================================
const allUsers = async () => {
    try {

        const users = await userModel.findAll({
            attributes: {
                exclude: ["password"]
            }
        });

        return users;

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// OBTENER USUARIO POR ID
// ==========================================
const getUserByIdService = async (id) => {
    try {

        return await userModel.findOne({
            where: {
                id
            },

            attributes: {
                exclude: ["password"]
            }
        });

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// CREAR USUARIO
// ==========================================
const createUserService = async (data) => {
    try {

        const user = await userModel.create(data);

        // Ocultar password solamente en la respuesta
        const userResponse = user.toJSON();

        delete userResponse.password;

        return userResponse;

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// ACTUALIZAR USUARIO
// ==========================================
const updateUserService = async (id, data) => {
    try {

        await userModel.update(
            data,
            {
                where: {
                    id
                }
            }
        );

        return await userModel.findOne({
            where: {
                id
            },

            attributes: {
                exclude: ["password"]
            }
        });

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// ELIMINAR USUARIO (INACTIVAR)
// ==========================================
const deleteUserService = async (id) => {
    try {

        return await userModel.update(
            {
                active: 0
            },
            {
                where: {
                    id
                }
            }
        );

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// CONFIRMAR CORREO
// ==========================================
const confirmEmailService = async (id) => {
    try {

        await userModel.update(
            {
                verifyEmail: true
            },
            {
                where: {
                    id
                }
            }
        );

        return await userModel.findOne({
            where: {
                id
            },

            attributes: {
                exclude: ["password"]
            }
        });

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// SOLICITAR RESTABLECIMIENTO DE CONTRASEÑA
// ==========================================
const forgotPasswordService = async (email) => {
    try {

        const user = await userModel.findOne({
            where: {
                email
            }
        });

        // Si el usuario no existe
        if (!user) {
            return null;
        }

        // Generar token aleatorio
        const resetToken = crypto
            .randomBytes(32)
            .toString("hex");

        // El token será válido durante 30 minutos
        const resetExpires = new Date(
            Date.now() + 30 * 60 * 1000
        );

        // Guardar token y fecha de expiración
        await userModel.update(
            {
                resetPasswordToken: resetToken,
                resetPasswordExpires: resetExpires
            },
            {
                where: {
                    id: user.id
                }
            }
        );

        // Enlace para restablecer contraseña
        const resetLink =
            `http://localhost:3001/reset-password?token=${resetToken}`;

        // Texto del correo
        const text = `
Hola ${user.username},

Recibimos una solicitud para restablecer tu contraseña de OVIADSO.

Utiliza el siguiente enlace para restablecer tu contraseña:

${resetLink}

Este enlace será válido durante 30 minutos.

Si tú no solicitaste este cambio, puedes ignorar este correo.
        `;

        // HTML del correo
        const html = `
            <div style="font-family: Arial, sans-serif; padding: 20px;">

                <h2>Restablecimiento de contraseña</h2>

                <p>
                    Hola <strong>${user.username}</strong>,
                </p>

                <p>
                    Recibimos una solicitud para restablecer
                    tu contraseña de OVIADSO.
                </p>

                <p>
                    Haz clic en el siguiente enlace:
                </p>

                <p>
                    <a
                        href="${resetLink}"
                        style="
                            background-color: #198754;
                            color: white;
                            padding: 10px 20px;
                            text-decoration: none;
                            border-radius: 5px;
                        "
                    >
                        Restablecer contraseña
                    </a>
                </p>

                <p>
                    Este enlace será válido durante
                    <strong>30 minutos</strong>.
                </p>

                <p>
                    Si tú no solicitaste este cambio,
                    puedes ignorar este correo.
                </p>

            </div>
        `;

        // Enviar correo
        await sendEmail(
            user.email,
            "Restablecimiento de contraseña - OVIADSO",
            text,
            html
        );

        return true;

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// RESTABLECER CONTRASEÑA
// ==========================================
const resetPasswordService = async (token, newPassword) => {
    try {

        const user = await userModel.findOne({
            where: {
                resetPasswordToken: token
            }
        });

        // Token no encontrado
        if (!user) {
            return null;
        }

        // Verificar que el token no haya expirado
        if (
            !user.resetPasswordExpires ||
            new Date() > new Date(user.resetPasswordExpires)
        ) {
            return null;
        }

        // Actualizar contraseña
        await userModel.update(
            {
                password: newPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null
            },
            {
                where: {
                    id: user.id
                }
            }
        );

        return true;

    } catch (error) {

        console.error(error);
        throw error;

    }
};

// ==========================================
// EXPORTAR SERVICIOS
// ==========================================
module.exports = {
    allUsers,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    confirmEmailService,
    forgotPasswordService,
    resetPasswordService
};