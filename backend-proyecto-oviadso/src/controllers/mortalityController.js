const {
    createMortalityService,
    updateMortality: updateMortalityService,
    deleteMortality: deleteMortalityService
} = require("../services/mortalityService");

const { Response } = require("../functions/response");


// ======================================================
// Obtener todas las mortalidades
// ======================================================
const getAllMortalities = async (req, res) => {

    try {

        const body = req.body;
        console.log("Body recibido:", body);

        return res.status(200).json({
            mensaje: "Obteniendo todas las mortalidades"
        });

    } catch (error) {

        console.error("Error al obtener las mortalidades:", error);

        const response = new Response(
            false,
            "Error al obtener las mortalidades",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Obtener mortalidad por ID
// ======================================================
const getMortalityById = async (req, res) => {

    try {

        const { id } = req.params;

        return res.status(200).json({
            mensaje: `Obteniendo la mortalidad con ID: ${id}`
        });

    } catch (error) {

        console.error("Error al obtener la mortalidad:", error);

        const response = new Response(
            false,
            "Error al obtener la mortalidad",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Crear mortalidad
// ======================================================
const createMortality = async (req, res) => {

    try {

        const {
            date,
            ovine_id,
            cause,
            postJob,
            active,
            description
        } = req.body;

        let errors = [];

        if (
            !date ||
            !ovine_id ||
            !cause ||
            !postJob ||
            active === undefined ||
            !description
        ) {
            errors.push("Todos los campos son obligatorios");
        }

        if (date === "") {
            errors.push("El campo date no puede estar vacío");
        }

        if (ovine_id === "") {
            errors.push("El campo ovine_id no puede estar vacío");
        }

        if (cause === "") {
            errors.push("El campo cause no puede estar vacío");
        }

        if (postJob === "") {
            errors.push("El campo postJob no puede estar vacío");
        }

        if (active === "") {
            errors.push("El campo active no puede estar vacío");
        }

        if (description === "") {
            errors.push("El campo description no puede estar vacío");
        }

        if (errors.length > 0) {

            const response = new Response(
                false,
                "Error al registrar la mortalidad",
                null,
                errors
            );

            return res.status(400).json(response.json);
        }

        const data = {
            date,
            ovine_id,
            cause,
            postJob,
            active,
            description
        };

        const mortality = await createMortalityService(data);

        const response = new Response(
            true,
            "Mortalidad registrada exitosamente",
            mortality,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al registrar la mortalidad:", error);

        const response = new Response(
            false,
            "Error interno al registrar la mortalidad",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Actualizar mortalidad
// ======================================================
const updateMortality = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            date,
            ovine_id,
            cause,
            postJob,
            active,
            description
        } = req.body;

        const updatedMortality = await updateMortalityService(id, {
            date,
            ovine_id,
            cause,
            postJob,
            active,
            description
        });

        return res.status(200).json({
            success: true,
            mensaje: `Mortalidad actualizada con ID: ${id}`,
            mortality: updatedMortality,
            error: null
        });

    } catch (error) {

        console.error("Error al actualizar la mortalidad:", error);

        const response = new Response(
            false,
            "Error interno al actualizar la mortalidad",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Inactivar mortalidad
// ======================================================
const deleteMortality = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteMortalityService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Mortalidad no encontrada",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Mortalidad con ID ${id} inactivada correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al inactivar la mortalidad:", error);

        const response = new Response(
            false,
            "Error al inactivar la mortalidad",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// EXPORTAR CONTROLADORES
// ======================================================
module.exports = {
    getAllMortalities,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
};