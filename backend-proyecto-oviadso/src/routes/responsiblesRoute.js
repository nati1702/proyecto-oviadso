const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
} = require("../controllers/responsiblesController.js");

// Obtener todos
router.get("/responsibles", verifyToken, getAllResponsibles);

// Obtener por ID
router.get("/responsibles/:id", verifyToken, getResponsibleById);

// Crear
router.post("/responsibles", verifyToken, createResponsible);

// Actualizar
router.put("/responsibles/:id", verifyToken, updateResponsible);

// Inactivar
router.delete("/responsibles/:id", verifyToken, deleteResponsible);

module.exports = router;