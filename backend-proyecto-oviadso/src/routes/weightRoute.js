const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllWeights,
    getWeightById,
    createWeight,
    updateWeight,
    deleteWeight
} = require("../controllers/weightController.js");

// Obtener todos los pesos
router.get("/weights", verifyToken, getAllWeights);

// Obtener peso por ID
router.get("/weights/:id", verifyToken, getWeightById);

// Crear peso
router.post("/weights", verifyToken, createWeight);

// Actualizar peso
router.put("/weights/:id", verifyToken, updateWeight);

// Inactivar peso
router.delete("/weights/:id", verifyToken, deleteWeight);

module.exports = router;