const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllBirths,
    getBirthById,
    createBirth,
    updateBirth,
    deleteBirth
} = require("../controllers/birthsController.js");

// Obtener todos los nacimientos
router.get("/births", verifyToken, getAllBirths);

// Obtener nacimiento por ID
router.get("/births/:id", verifyToken, getBirthById);

// Crear nacimiento
router.post("/births", verifyToken, createBirth);

// Actualizar nacimiento
router.put("/births/:id", verifyToken, updateBirth);

// Inactivar nacimiento
router.delete("/births/:id", verifyToken, deleteBirth);

module.exports = router;