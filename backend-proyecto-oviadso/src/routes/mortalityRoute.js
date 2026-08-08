const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllMortalities,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
} = require("../controllers/mortalityController.js");


// ==========================================
// OBTENER TODAS LAS MORTALIDADES
// ==========================================
router.get(
    "/mortalities",
    verifyToken,
    getAllMortalities
);


// ==========================================
// OBTENER MORTALIDAD POR ID
// ==========================================
router.get(
    "/mortalities/:id",
    verifyToken,
    getMortalityById
);


// ==========================================
// CREAR MORTALIDAD
// ==========================================
router.post(
    "/mortalities",
    verifyToken,
    createMortality
);


// ==========================================
// ACTUALIZAR MORTALIDAD
// ==========================================
router.put(
    "/mortalities/:id",
    verifyToken,
    updateMortality
);


// ==========================================
// INACTIVAR MORTALIDAD
// ==========================================
router.delete(
    "/mortalities/:id",
    verifyToken,
    deleteMortality
);


module.exports = router;