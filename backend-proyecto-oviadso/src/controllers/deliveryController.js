const {
    createDeliveryService,
    updateDelivery: updateDeliveryService,
    deleteDelivery: deleteDeliveryService
} = require("../services/deliveryService");

const { Response } = require("../functions/response");


// ======================================================
// Obtener todos los partos
// ======================================================
const getAllDeliveries = async (req, res) => {

    try {

        const body = req.body;
        console.log("Body recibido:", body);

        return res.status(200).json({
            mensaje: "Obteniendo todos los partos"
        });

    } catch (error) {

        console.error("Error al obtener los partos:", error);

        const response = new Response(
            false,
            "Error al obtener los partos",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Obtener parto por ID
// ======================================================
const getDeliveryById = async (req, res) => {

    try {

        const { id } = req.params;

        return res.status(200).json({
            mensaje: `Obteniendo el parto con ID: ${id}`
        });

    } catch (error) {

        console.error("Error al obtener el parto:", error);

        const response = new Response(
            false,
            "Error al obtener el parto",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Crear parto
// ======================================================
const createDelivery = async (req, res) => {

    try {

        const {
            date,
            mother_id,
            number_of_offspring,
            type_of_birth,
            complications,
            postJob,
            active,
            notes,
            status
        } = req.body;

        let errors = [];

        if (
            !date ||
            !mother_id ||
            !number_of_offspring ||
            !type_of_birth ||
            !complications ||
            !postJob ||
            active === undefined ||
            !notes ||
            !status
        ) {
            errors.push("Todos los campos son obligatorios");
        }

        if (date === "") {
            errors.push("El campo date no puede estar vacío");
        }

        if (mother_id === "") {
            errors.push("El campo mother_id no puede estar vacío");
        }

        if (number_of_offspring === "") {
            errors.push("El campo number_of_offspring no puede estar vacío");
        }

        if (type_of_birth === "") {
            errors.push("El campo type_of_birth no puede estar vacío");
        }

        if (complications === "") {
            errors.push("El campo complications no puede estar vacío");
        }

        if (postJob === "") {
            errors.push("El campo postJob no puede estar vacío");
        }

        if (active === "") {
            errors.push("El campo active no puede estar vacío");
        }

        if (notes === "") {
            errors.push("El campo notes no puede estar vacío");
        }

        if (status === "") {
            errors.push("El campo status no puede estar vacío");
        }

        if (errors.length > 0) {

            const response = new Response(
                false,
                "Error al crear el registro de parto",
                null,
                errors
            );

            return res.status(400).json(response.json);
        }

        const data = {
            date,
            mother_id,
            number_of_offspring,
            type_of_birth,
            complications,
            postJob,
            active,
            notes,
            status
        };

        const delivery = await createDeliveryService(data);

        const response = new Response(
            true,
            "Parto registrado exitosamente",
            delivery,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al registrar el parto:", error);

        const response = new Response(
            false,
            "Error interno al registrar el parto",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Actualizar parto
// ======================================================
const updateDelivery = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            date,
            mother_id,
            number_of_offspring,
            type_of_birth,
            complications,
            postJob,
            active,
            notes,
            status
        } = req.body;

        const updatedDelivery = await updateDeliveryService(id, {
            date,
            mother_id,
            number_of_offspring,
            type_of_birth,
            complications,
            postJob,
            active,
            notes,
            status
        });

        return res.status(200).json({
            success: true,
            mensaje: `Parto actualizado con ID: ${id}`,
            delivery: updatedDelivery,
            error: null
        });

    } catch (error) {

        console.error("Error al actualizar el parto:", error);

        const response = new Response(
            false,
            "Error interno al actualizar el parto",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ======================================================
// Inactivar parto
// ======================================================
const deleteDelivery = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteDeliveryService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Parto no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Parto con ID ${id} inactivado correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al inactivar el parto:", error);

        const response = new Response(
            false,
            "Error al inactivar el parto",
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
    getAllDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};