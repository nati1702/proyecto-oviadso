const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const {
    getAllDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
} = require("../controllers/deliveryController.js");


// ==========================================
// OBTENER TODOS LOS PARTOS
// ==========================================
router.get(
    "/deliveries",
    verifyToken,
    getAllDeliveries
);


// ==========================================
// OBTENER PARTO POR ID
// ==========================================
router.get(
    "/deliveries/:id",
    verifyToken,
    getDeliveryById
);


// ==========================================
// CREAR PARTO
// ==========================================
router.post(
    "/deliveries",
    verifyToken,
    createDelivery
);


// ==========================================
// ACTUALIZAR PARTO
// ==========================================
router.put(
    "/deliveries/:id",
    verifyToken,
    updateDelivery
);


// ==========================================
// INACTIVAR PARTO
// ==========================================
router.delete(
    "/deliveries/:id",
    verifyToken,
    deleteDelivery
);


module.exports = router;