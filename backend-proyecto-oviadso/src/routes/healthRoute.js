const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllHealths,
    getHealthById,
    createHealth,
    updateHealth,
    deleteHealth
} = require("../controllers/healthController.js");


// ==========================================
// OBTENER TODOS LOS REGISTROS DE SALUD
// ==========================================
router.get(
    "/healths",
    verifyToken,
    getAllHealths
);


// ==========================================
// OBTENER REGISTRO DE SALUD POR ID
// ==========================================
router.get(
    "/healths/:id",
    verifyToken,
    getHealthById
);


// ==========================================
// CREAR REGISTRO DE SALUD
// ==========================================
router.post(
    "/healths",
    verifyToken,
    createHealth
);


// ==========================================
// ACTUALIZAR REGISTRO DE SALUD
// ==========================================
router.put(
    "/healths/:id",
    verifyToken,
    updateHealth
);


// ==========================================
// INACTIVAR REGISTRO DE SALUD
// ==========================================
router.delete(
    "/healths/:id",
    verifyToken,
    deleteHealth
);


module.exports = router;