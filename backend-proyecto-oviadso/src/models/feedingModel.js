const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Feeding = db.define(
    "feedings",
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
        food_type: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        quantity: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
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
        notes: {
            type: DataTypes.STRING(80),
            allowNull: true
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
        tableName: "feedings",
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = Feeding;