const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllFeedings,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding
} = require("../controllers/feedingController.js");

// Obtener todas las alimentaciones
router.get(
    "/feedings",
    verifyToken,
    getAllFeedings
);

// Obtener alimentación por ID
router.get(
    "/feedings/:id",
    verifyToken,
    getFeedingById
);

// Crear alimentación
router.post(
    "/feedings",
    verifyToken,
    createFeeding
);

// Actualizar alimentación
router.put(
    "/feedings/:id",
    verifyToken,
    updateFeeding
);

// Inactivar alimentación
router.delete(
    "/feedings/:id",
    verifyToken,
    deleteFeeding
);

module.exports = router;