const {
    getAllBirths: getAllBirthsService,
    getBirthById: getBirthByIdService,
    createBirthService,
    updateBirth: updateBirthService,
    deleteBirth: deleteBirthService
} = require("../services/birthService");

const { Response } = require("../functions/response");

// Obtener todos los nacimientos
const getAllBirths = async (req, res) => {

    try {

        const births = await getAllBirthsService();

        const response = new Response(
            true,
            "Registros de nacimientos obtenidos exitosamente",
            births,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al obtener los registros de nacimientos",
            null,
            error.message
        );

        return res.status(500).json(response.json);

    }

};

// Obtener nacimiento por ID
const getBirthById = async (req, res) => {

    try {

        const { id } = req.params;

        const birth = await getBirthByIdService(id);

        if (!birth) {

            const response = new Response(
                false,
                "Nacimiento no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);

        }

        const response = new Response(
            true,
            "Nacimiento obtenido exitosamente",
            birth,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al obtener el nacimiento",
            null,
            error.message
        );

        return res.status(500).json(response.json);

    }

};

// Crear nacimiento
const createBirth = async (req, res) => {

    const {
        date,
        ovine_id,
        mother_id,
        weight,
        status,
        postJob,
        active,
        notes
    } = req.body;

    let errors = [];

    if (!date) errors.push("La fecha es obligatoria");
    if (!ovine_id) errors.push("El ID del ovino es obligatorio");
    if (!mother_id) errors.push("El ID de la madre es obligatorio");
    if (!weight) errors.push("El peso es obligatorio");
    if (!status) errors.push("El estado es obligatorio");
    if (!postJob) errors.push("El procedimiento es obligatorio");
    if (active === undefined) errors.push("El estado activo es obligatorio");

    if (errors.length > 0) {

        const response = new Response(
            false,
            "Error al crear el nacimiento",
            null,
            errors
        );

        return res.status(400).json(response.json);

    }

    try {

        const birth = await createBirthService(req.body);

        const response = new Response(
            true,
            "Nacimiento registrado exitosamente",
            birth,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error interno al registrar el nacimiento",
            null,
            error.message
        );

        return res.status(500).json(response.json);

    }

};

// Actualizar nacimiento
const updateBirth = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedBirth = await updateBirthService(id, req.body);

        const response = new Response(
            true,
            `Nacimiento actualizado con ID ${id}`,
            updatedBirth,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al actualizar el nacimiento",
            null,
            error.message
        );

        return res.status(500).json(response.json);

    }

};

// Eliminar (Inactivar)
const deleteBirth = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteBirthService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Nacimiento no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);

        }

        const response = new Response(
            true,
            `Nacimiento con ID ${id} inactivado correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error(error);

        const response = new Response(
            false,
            "Error al inactivar el nacimiento",
            null,
            error.message
        );

        return res.status(500).json(response.json);

    }

};

module.exports = {
    getAllBirths,
    getBirthById,
    createBirth,
    updateBirth,
    deleteBirth
};