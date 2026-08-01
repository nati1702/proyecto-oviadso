const {
    getAllFeedings: getAllFeedingsService,
    getFeedingById: getFeedingByIdService,
    createFeedingService,
    updateFeeding: updateFeedingService,
    deleteFeeding: deleteFeedingService
} = require("../services/feedingService");

const { Response } = require("../functions/response");

// Obtener todos los registros
const getAllFeedings = async (req, res) => {

    try {

        const feedings = await getAllFeedingsService();

        const response = new Response(
            true,
            "Registros de alimentación obtenidos exitosamente",
            feedings,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al obtener los registros de alimentación",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Obtener por ID
const getFeedingById = async (req, res) => {

    try {

        const { id } = req.params;

        const feeding = await getFeedingByIdService(id);

        if (!feeding) {

            const response = new Response(
                false,
                "Registro de alimentación no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Registro encontrado",
            feeding,
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
const createFeeding = async (req, res) => {

    const {
        date,
        ovine_id,
        food_type,
        quantity,
        postJob,
        active,
        notes
    } = req.body;

    let errors = [];

    if (!date) errors.push("La fecha es obligatoria");
    if (!ovine_id) errors.push("El ID del ovino es obligatorio");
    if (!food_type) errors.push("El tipo de alimento es obligatorio");
    if (!quantity) errors.push("La cantidad es obligatoria");
    if (!postJob) errors.push("El procedimiento es obligatorio");
    if (active === undefined) errors.push("El estado es obligatorio");

    if (errors.length > 0) {

        const response = new Response(
            false,
            "Error al crear el registro de alimentación",
            null,
            errors
        );

        return res.status(400).json(response.json);
    }

    try {

        const feeding = await createFeedingService(req.body);

        const response = new Response(
            true,
            "Registro de alimentación creado exitosamente",
            feeding,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error interno al crear el registro de alimentación",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Actualizar
const updateFeeding = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedFeeding = await updateFeedingService(id, req.body);

        const response = new Response(
            true,
            `Registro de alimentación actualizado con ID ${id}`,
            updatedFeeding,
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
const deleteFeeding = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteFeedingService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Registro de alimentación no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Registro de alimentación con ID ${id} inactivado correctamente`,
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
    getAllFeedings,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding
};