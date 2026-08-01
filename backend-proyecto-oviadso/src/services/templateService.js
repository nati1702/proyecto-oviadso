const fs = require("fs");
const path = require("path");

const getTemplate = (templateName, variables = {}) => {

    // Leer el archivo JSON de configuración
    const jsonPath = path.join(
        process.cwd(),
        "public",
        "templates",
        `${templateName}.json`
    );

    const json = JSON.parse(
        fs.readFileSync(jsonPath, "utf8")
    );

    // Leer el archivo HTML
    const htmlPath = path.join(
        process.cwd(),
        "public",
        "templates",
        json.html
    );

    let html = fs.readFileSync(
        htmlPath,
        "utf8"
    );

    // Reemplazar los valores por defecto del JSON
    for (const key in json.params) {
        html = html.replaceAll(
            key,
            json.params[key]
        );
    }

    // Reemplazar las variables enviadas desde el controlador
    for (const key in variables) {
        html = html.replaceAll(
            key,
            variables[key]
        );
    }

    return {
        subject: json.subject,
       
        html

    };
};

module.exports = {
    getTemplate
};