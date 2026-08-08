const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllMountings,
    getMountingById,
    createMounting,
    updateMounting,
    deleteMounting
} = require("../controllers/mountingController.js");

// Obtener todos los registros de monta
router.get("/mountings", verifyToken, getAllMountings);

// Obtener registro de monta por ID
router.get("/mountings/:id", verifyToken, getMountingById);

// Crear registro de monta
router.post("/mountings", verifyToken, createMounting);

// Actualizar registro de monta
router.put("/mountings/:id", verifyToken, updateMounting);

// Inactivar registro de monta
router.delete("/mountings/:id", verifyToken, deleteMounting);

module.exports = router;