const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllOvines,
    getOvineById,
    createOvine,
    updateOvine,
    deleteOvine
} = require("../controllers/ovineController");


// ==========================================
// OBTENER TODOS LOS OVINOS
// ==========================================
router.get(
    "/ovines",
    verifyToken,
    getAllOvines
);


// ==========================================
// OBTENER OVINO POR ID
// ==========================================
router.get(
    "/ovines/:id",
    verifyToken,
    getOvineById
);


// ==========================================
// CREAR OVINO
// ==========================================
router.post(
    "/ovines",
    verifyToken,
    createOvine
);


// ==========================================
// ACTUALIZAR OVINO
// ==========================================
router.put(
    "/ovines/:id",
    verifyToken,
    updateOvine
);


// ==========================================
// INACTIVAR OVINO
// ==========================================
router.delete(
    "/ovines/:id",
    verifyToken,
    deleteOvine
);


module.exports = router;