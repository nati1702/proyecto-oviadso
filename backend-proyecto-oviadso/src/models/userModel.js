const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const User = db.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        role: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        postJob: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        verifyEmail: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },

        documentId: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        createdAt: {
            type: DataTypes.DATE,
            field: "createdAt"
        },

        updatedAt: {
            type: DataTypes.DATE,
            field: "updatedAt"
        },

        // ==========================================
        // RESTABLECIMIENTO DE CONTRASEÑA
        // ==========================================

        resetPasswordToken: {
            type: DataTypes.STRING(255),
            allowNull: true
        },

        resetPasswordExpires: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: "users",
        timestamps: true
    }
);

module.exports = User;