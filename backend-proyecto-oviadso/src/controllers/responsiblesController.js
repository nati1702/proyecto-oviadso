const {
    getAllResponsibles: getAllResponsiblesService,
    getResponsibleById: getResponsibleByIdService,
    createResponsibleService,
    updateResponsible: updateResponsibleService,
    deleteResponsible: deleteResponsibleService
} = require("../services/responsiblesService");

const { Response } = require("../functions/response");


// ==========================================
// OBTENER TODOS LOS RESPONSABLES
// ==========================================
const getAllResponsibles = async (req, res) => {

    try {

        const responsibles = await getAllResponsiblesService();

        const response = new Response(
            true,
            "Responsables obtenidos exitosamente",
            responsibles,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al obtener responsables:", error);

        const response = new Response(
            false,
            "Error al obtener los responsables",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ==========================================
// OBTENER RESPONSABLE POR ID
// ==========================================
const getResponsibleById = async (req, res) => {

    try {

        const { id } = req.params;

        const responsible = await getResponsibleByIdService(id);

        if (!responsible) {

            const response = new Response(
                false,
                "Responsable no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Responsable obtenido exitosamente",
            responsible,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al obtener responsable:", error);

        const response = new Response(
            false,
            "Error al obtener el responsable",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ==========================================
// CREAR RESPONSABLE
// ==========================================
const createResponsible = async (req, res) => {

    try {

        const {
            name,
            lastname,
            document,
            postJob,
            active,
            phone,
            email
        } = req.body;

        let errors = [];

        if (
            name === undefined ||
            lastname === undefined ||
            document === undefined ||
            postJob === undefined ||
            active === undefined ||
            phone === undefined ||
            email === undefined
        ) {
            errors.push("Todos los campos son obligatorios");
        }

        if (name === "") {
            errors.push("El campo name no puede estar vacío");
        }

        if (lastname === "") {
            errors.push("El campo lastname no puede estar vacío");
        }

        if (document === "") {
            errors.push("El campo document no puede estar vacío");
        }

        if (postJob === "") {
            errors.push("El campo postJob no puede estar vacío");
        }

        if (phone === "") {
            errors.push("El campo phone no puede estar vacío");
        }

        if (email === "") {
            errors.push("El campo email no puede estar vacío");
        }

        if (errors.length > 0) {

            const response = new Response(
                false,
                "Error al crear el responsable",
                null,
                errors
            );

            return res.status(400).json(response.json);
        }

        const data = {
            name,
            lastname,
            document,
            postJob,
            active,
            phone,
            email
        };

        const responsible = await createResponsibleService(data);

        const response = new Response(
            true,
            "Responsable creado exitosamente",
            responsible,
            null
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al crear el responsable:", error);

        const response = new Response(
            false,
            "Error interno al crear el responsable",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ==========================================
// ACTUALIZAR RESPONSABLE
// ==========================================
const updateResponsible = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            name,
            lastname,
            document,
            postJob,
            active,
            phone,
            email
        } = req.body;

        const updatedResponsible = await updateResponsibleService(id, {
            name,
            lastname,
            document,
            postJob,
            active,
            phone,
            email
        });

        const response = new Response(
            true,
            `Responsable actualizado con ID: ${id}`,
            updatedResponsible,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al actualizar el responsable:", error);

        const response = new Response(
            false,
            "Error interno al actualizar el responsable",
            null,
            error.message
        );

        return res.status(500).json(response.json);
    }
};


// ==========================================
// ELIMINAR / INACTIVAR RESPONSABLE
// ==========================================
const deleteResponsible = async (req, res) => {

    try {

        const { id } = req.params;

        const [updated] = await deleteResponsibleService(id);

        if (updated === 0) {

            const response = new Response(
                false,
                "Responsable no encontrado",
                null,
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            `Responsable con ID ${id} inactivado correctamente`,
            null,
            null
        );

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error al inactivar responsable:", error);

        const response = new Response(
            false,
            "Error al inactivar el responsable",
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
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
};