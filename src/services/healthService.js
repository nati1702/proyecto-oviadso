const Health = require("../models/healthModel");

// Obtener todos los registros de salud
const getAllHealths = async () => {
    try {
        return await Health.findAll();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtener registro de salud por ID
const getHealthById = async (id) => {
    try {
        return await Health.findOne({
            where: { id }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Crear registro de salud
const createHealthService = async (data) => {
    try {
        return await Health.create(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Actualizar registro de salud
const updateHealth = async (id, data) => {
    try {
        return await Health.update(data, {
            where: { id }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Inactivar registro de salud
const deleteHealth = async (id) => {
    try {
        return await Health.update(
            { active: false },
            {
                where: { id }
            }
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getAllHealths,
    getHealthById,
    createHealthService,
    updateHealth,
    deleteHealth
};