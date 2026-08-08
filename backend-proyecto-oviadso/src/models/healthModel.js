const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Health = db.define(
    "healths",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        ovine_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        diagnosis: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        treatment: {
            type: DataTypes.STRING(30),
            allowNull: true
        },

        postJob: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },

        observations: {
            type: DataTypes.STRING(80),
            allowNull: true
        },

        vaccine_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        vaccine_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: "healths",
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = Health;