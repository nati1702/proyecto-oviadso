const {
    getAllHealths: getAllHealthsService,
    getHealthById: getHealthByIdService,
    createHealthService,
    updateHealth: updateHealthService,
    deleteHealth: deleteHealthService
} = require("../services/healthService");

const { Response } = require("../functions/response");

// Obtener todos los registros
const getAllHealths = async (req, res) => {

    try {

        const healths = await getAllHealthsService();

        const response = new Response(
            true,
            "Registros de salud obtenidos exitosamente",
            healths,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al obtener los registros de salud",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Obtener por ID
const getHealthById = async (req, res) => {

    try {

        const { id } = req.params;

        const health = await getHealthByIdService(id);

        if (!health) {

            const response = new Response(
                false,
                "Registro de salud no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Registro encontrado",
            health,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al obtener el registro",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Crear
const createHealth = async (req, res) => {

    const {
        date,
        ovine_id,
        diagnosis,
        treatment,
        postJob,
        active,
        observations,
        vaccine_id,
        vaccine_name
    } = req.body;

    let errors = [];

    if (!date) errors.push("La fecha es obligatoria");
    if (!ovine_id) errors.push("El ID del ovino es obligatorio");
    if (!diagnosis) errors.push("El diagnóstico es obligatorio");
    if (!postJob) errors.push("El procedimiento es obligatorio");
    if (active === undefined) errors.push("El estado es obligatorio");
    if (!vaccine_id) errors.push("La vacuna es obligatoria");
    if (!vaccine_name) errors.push("El nombre de la vacuna es obligatorio");

    if (errors.length > 0) {

        const response = new Response(
            false,
            "Error al crear el registro de salud",
            null,
            errors
        );

        return res.status(400).json(response.json);
    }

    try {

        const health = await createHealthService(req.body);

        const response = new Response(
            true,
            "Registro de salud creado exitosamente",
            health,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error interno al crear el registro de salud",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Actualizar
const updateHealth = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedHealth = await updateHealthService(id, req.body);

        const response = new Response(
            true,
            `Registro de salud actualizado con ID ${id}`,
            updatedHealth,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al actualizar el registro",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Eliminar (Inactivar)
const deleteHealth = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteHealthService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Registro de salud no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Registro de salud con ID ${id} inactivado correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al inactivar el registro",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

module.exports = {
    getAllHealths,
    getHealthById,
    createHealth,
    updateHealth,
    deleteHealth
};