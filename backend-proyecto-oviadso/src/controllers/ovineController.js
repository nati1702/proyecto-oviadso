const {
    createOvineService,
    updateOvine: updateOvineService,
    deleteOvine: deleteOvineService
} = require("../services/ovineService");

const { Response } = require("../functions/response");

// ======================================================
// Obtener todos los ovinos
// ======================================================
const getAllOvines = async (req, res) => {

    try {

        const body = req.body;
        console.log("Body recibido:", body);

        return res.status(200).json({
            mensaje: "Obteniendo todos los ovinos"
        });

    } catch (error) {

        console.error("Error al obtener los ovinos:", error);

        const response = new Response(
            false,
            "Error al obtener los ovinos",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Obtener ovino por ID
// ======================================================
const getOvineById = async (req, res) => {

    try {

        const { id } = req.params;

        return res.status(200).json({
            mensaje: `Obteniendo el ovino con ID: ${id}`
        });

    } catch (error) {

        console.error("Error al obtener el ovino:", error);

        const response = new Response(
            false,
            "Error al obtener el ovino",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Crear ovino
// ======================================================
const createOvine = async (req, res) => {

    try {

        const {
            name,
            tag,
            breed,
            sex,
            birth_date,
            weight,
            status,
            active
        } = req.body;

        let errors = [];

        if (!name || !tag || !breed || !sex || !birth_date || !weight || !status || active === undefined) {
            errors.push("Todos los campos son obligatorios");
        }

        if (name === "") {
            errors.push("El campo name no puede estar vacío");
        }

        if (tag === "") {
            errors.push("El campo tag no puede estar vacío");
        }

        if (breed === "") {
            errors.push("El campo breed no puede estar vacío");
        }

        if (sex === "") {
            errors.push("El campo sex no puede estar vacío");
        }

        if (birth_date === "") {
            errors.push("El campo birth_date no puede estar vacío");
        }

        if (weight === "") {
            errors.push("El campo weight no puede estar vacío");
        }

        if (status === "") {
            errors.push("El campo status no puede estar vacío");
        }

        if (active === "") {
            errors.push("El campo active no puede estar vacío");
        }

        if (errors.length > 0) {

            const response = new Response(
                false,
                "Error al crear el ovino",
                null,
                errors
            );

            return res.status(400).json(response.json);
        }

        const data = {
            name,
            tag,
            breed,
            sex,
            birth_date,
            weight,
            status,
            active
        };

        const ovine = await createOvineService(data);

        const response = new Response(
            true,
            "Ovino registrado exitosamente",
            ovine,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al registrar el ovino:", error);

        const response = new Response(
            false,
            "Error interno al registrar el ovino",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Actualizar ovino
// ======================================================
const updateOvine = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            name,
            tag,
            breed,
            sex,
            birth_date,
            weight,
            status,
            active
        } = req.body;

        const updatedOvine = await updateOvineService(id, {
            name,
            tag,
            breed,
            sex,
            birth_date,
            weight,
            status,
            active
        });

        return res.status(200).json({
            success: true,
            mensaje: `Ovino actualizado con ID: ${id}`,
            ovine: updatedOvine,
            error: null
        });

    } catch (error) {

        console.error("Error al actualizar el ovino:", error);

        const response = new Response(
            false,
            "Error interno al actualizar el ovino",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Inactivar ovino
// ======================================================
const deleteOvine = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteOvineService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Ovino no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Ovino con ID ${id} inactivado correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al inactivar el ovino:", error);

        const response = new Response(
            false,
            "Error al inactivar el ovino",
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
    getAllOvines,
    getOvineById,
    createOvine,
    updateOvine,
    deleteOvine
};