const fs = require("fs");
const path = require("path");

const createLog = async (error) => {

    const mensaje = `
===========================
Fecha: ${new Date().toLocaleString()}
Error: ${error.message}
===========================

`;

    console.error(mensaje);

    const ruta = path.join(__dirname, "../../logs/error.log");

    fs.appendFileSync(ruta, mensaje);

}

module.exports = {
    createLog
};